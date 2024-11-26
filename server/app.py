from flask import Flask, make_response, url_for, jsonify, session, redirect, request
from flask_migrate import Migrate
from models import db, Customer, Admin, Message, Image
from flask_restful import Resource, Api
from flask_bcrypt import Bcrypt
from authlib.integrations.flask_client import OAuth
from flask_cors import CORS
from dotenv import load_dotenv  # Import dotenv
import os

# Load .env variables
load_dotenv()

app = Flask(__name__)

# Configurations
app.config['SECRET_KEY'] = "b'\x98x\x0e\xf4\x83^\n:\x1b\xf4\xc8\xb5X\\c\xf7)\xba.\xfc\x88\x1f\x95C'"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SECURE'] = False 
app.json.compact = False

# Validate SECRET_KEY
if not app.config['SECRET_KEY']:
    raise RuntimeError("SECRET_KEY is not set! Check your .env file or environment variables.")

migrate = Migrate(app, db)
api = Api(app)
bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True, resources={r"/*": {"origins": ["http://localhost:5173", "http://127.0.0.1:5173"]}})

db.init_app(app)

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
            return redirect("http://127.0.0.1:5173/admindashboard")
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
        
        
        

api.add_resource(Images, '/api/images')
api.add_resource(ImagesById, '/api/images/<int:id>')
api.add_resource(CustomerData, '/api/customers', endpoint='customers')
api.add_resource(Login, '/api/login')
api.add_resource(Logout, '/api/logout')
api.add_resource(CheckSession, '/api/session')
api.add_resource(GoogleLogin, '/api/auth/google/login')
api.add_resource(GoogleCallback, '/api/auth/google/callback', endpoint='google_callback')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
