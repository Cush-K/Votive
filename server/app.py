from flask import Flask, make_response, url_for, jsonify, session, redirect, request, send_from_directory
from flask_migrate import Migrate
from models import db, Customer, Admin, Message, Image, ScheduledJob
from flask_restful import Resource, Api
from flask_bcrypt import Bcrypt
from authlib.integrations.flask_client import OAuth
from flask_cors import CORS
from datetime import timedelta, datetime
from dotenv import load_dotenv  # Import dotenv
import os
from twilio.rest import Client

# Load .env variables
load_dotenv()

app = Flask(__name__, static_folder="../client/dist", static_url_path="")

# Configurations
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SECURE'] = True
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
app.config['SESSION_PERMANENT'] = True
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=1)

# Validate SECRET_KEY
if not app.config['SECRET_KEY']:
    raise RuntimeError("SECRET_KEY is not set! Check your .env file or environment variables.")

migrate = Migrate(app, db)
api = Api(app)
bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)

db.init_app(app)


@app.errorhandler(404)
def not_found(e):
    if request.path.startswith("/api/"):
        return jsonify({"error": "Not found"}), 404
    return send_from_directory(app.static_folder, "index.html")

@app.route('/api')
def index():
    return '<h1>Index of Votive Laundry</h1>'

# Environment Variables
account_sid = os.getenv('TWILIO_ACCOUNT_SID')
auth_token = os.getenv('TWILIO_AUTH_TOKEN')
twilio_phone_number = os.getenv('TWILIO_PHONE_NUMBER')

client = Client(account_sid, auth_token)

def send_sms(to, message):
    try:
        message = client.messages.create(
            body=message,
            from_=twilio_phone_number,
            to=to  # Recipient phone number
        )
        print(f"SMS sent successfully: {message.sid}")
        return message.sid
    except Exception as e:
        print(f"Error sending SMS: {e}")
        raise e

# OAuth Configuration
oauth = OAuth(app)
google = oauth.register(
    name='google',
    client_id=os.environ.get('GOOGLE_CLIENT_ID'),
    client_secret=os.environ.get('GOOGLE_CLIENT_SECRET'),
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'},
    api_base_url='https://www.googleapis.com/oauth2/v3/',  # Correct base URL for user info
)

class GoogleLogin(Resource):
    def get(self):
        redirect_uri = url_for('google_callback', _external=True)
        return google.authorize_redirect(redirect_uri)


class GoogleCallback(Resource):
    def get(self):
        try:
            token = google.authorize_access_token()
            user_info = google.get('userinfo').json()
            print(f"User Info: {user_info}")
            session['user'] = {
                'id': user_info['sub'],
                'email': user_info['email'],
                'username': user_info['name']
            }
            return redirect("/admindashboard")
        except Exception as e:
            return jsonify({"error": str(e)})
        

class Login(Resource):
    def post(self):
        data = request.get_json()
        admin = Admin.query.filter_by(username = data['username']).first()
        
        if admin and bcrypt.check_password_hash(admin.password, data['password']):
            session['admin_id'] = admin.id
            return {
                "message": "Login successful",
                "data": admin.to_dict(),
                "status": 200
            }
        else:
            return {"error": "Invalid credentials"}, 401
        
        
class Logout(Resource):
    def delete(self):
        session.pop('admin_id', None)
        return {}, 204
        

class CheckSession(Resource):
    def get(self):
        admin_id = session.get('admin_id')
        
        if admin_id:
            admin = Admin.query.filter_by(id=admin_id).first()
            
            if admin:
                return make_response(admin.to_dict(only=('id','username','email')), 200)
            else:
                return {"error": "User not found"}, 404
        return {"error": "Unauthorized"}, 401


class CustomerData(Resource):
    def get(self):
        customers_dict = [customer.to_dict() for customer in Customer.query.all()]
        return make_response(customers_dict, 200)

class Images(Resource):
    def get(self):
        images_dict = [image.to_dict() for image in Image.query.all()]
        return make_response(images_dict, 200)
    
    def post(self):
        data = request.get_json()
        
         # Validate required fields
        required_fields = ['name', 'image_url', 'redirect_link']
        for field in required_fields:
            if field not in data:
                return {"error": f"'{field}' is required"}, 400
            
        image = Image(
            name=data['name'],
            image_url=data['image_url'],
            redirect_link=data['redirect_link']
        )
        
        try:
            db.session.add(image)
            db.session.commit()
            return image.to_dict(), 201
        except Exception as e:
            db.session.rollback()
            return {"error": f"Database error: {str(e)}"}, 500
    

class ImagesById(Resource):
    def delete(self, id):
        image = Image.query.filter_by(id=id).first()
        
        if image:
            db.session.delete(image)
            db.session.commit()
            
            return {},204
        return{
            "error": "Failed to Delete Image"
        }
        
class Messages(Resource):
    def get(self):
        messages_dict = [message.to_dict() for message in Message.query.all()]
        return make_response(messages_dict, 200)
    
    def post(self):
        data = request.get_json()
        
         # Validate required fields
        required_fields = ['firstName', 'lastName', 'email', 'phoneNumber','message']
        for field in required_fields:
            if field not in data:
                return {"error": f"'{field}' is required"}, 400
            
        message = Message(
            first_name=data['firstName'],
            last_name=data['lastName'],
            email=data['email'],
            phone_number=data['phoneNumber'],
            message=data['message']
        )
        
        try:
            db.session.add(message)
            db.session.commit()
            return message.to_dict(), 201
        except Exception as e:
            db.session.rollback()
            return {"error": f"Database error: {str(e)}"}, 500

class Schedules(Resource):
    def get(self):
        schedules_dict = [schedule.to_dict() for schedule in ScheduledJob.query.all()]
        return make_response(schedules_dict, 200)
    
    def post(self):
        data = request.get_json()
        
        try:
            # Convert date and time fields
            parsed_date = datetime.strptime(data['date'], "%Y-%m-%d").date()  # Convert to Python date object
            parsed_time = datetime.strptime(data['time'], "%I:%M %p").time()  # Convert to Python time object (e.g., "08:00 AM")
            
            schedule = ScheduledJob(
                first_name=data['firstname'],
                last_name=data['lastname'],
                email=data['email'],
                phone_number=data['phone'],
                category=data['category'],
                estate=data['estate'],
                apartment=data['apartment'],
                landmark=data['landmark'],
                date=parsed_date,
                time=parsed_time,
                message=data['message'],
            )
            
            db.session.add(schedule)
            db.session.commit()
            
            # Send SMS notification
            # phone_number = data['phone']
            # sms_message = f"Hello {data['firstname']}, your order is scheduled for {parsed_date} at {parsed_time}."
            # send_sms(phone_number, sms_message)
            
            return schedule.to_dict(), 201
        
        except ValueError as ve:
            return {"error": f"Invalid date or time format: {str(ve)}"}, 400
        
        except Exception as e:
            db.session.rollback()
            return {"error": f"Database error: {str(e)}"}, 500
   

api.add_resource(Images, '/api/images')
api.add_resource(Messages, '/api/messages')
api.add_resource(Schedules, '/api/schedules')
api.add_resource(ImagesById, '/api/images/<int:id>')
api.add_resource(CustomerData, '/api/customers', endpoint='customers')
api.add_resource(Login, '/api/login')
api.add_resource(Logout, '/api/logout')
api.add_resource(CheckSession, '/api/session')
api.add_resource(GoogleLogin, '/api/auth/google/login')
api.add_resource(GoogleCallback, '/api/auth/google/callback', endpoint='google_callback')


# if __name__ == '__main__':
#     app.run(port=5555, debug=True)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5555))
    app.run(host="0.0.0.0", port=port)
