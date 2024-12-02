from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin as sm


db = SQLAlchemy()

class Customer(db.Model, sm):
    __tablename__ = 'customers'
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    phone_number = db.Column(db.String)
    password = db.Column(db.String)
    
    def __repr__(self):
        return f'<Customer {self.id} {self.first_name} {self.last_name}>'
    
class Admin(db.Model, sm):
    __tablename__ = 'admins'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    
    def __repr__(self):
        return f'<Admin {self.id} {self.first_name} {self.last_name}>'

class ScheduledJob(db.Model, sm):
    __tablename__ = 'scheduled_jobs'
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String, unique=False)
    phone_number = db.Column(db.String)
    category = db.Column(db.String)
    estate = db.Column(db.String)
    apartment = db.Column(db.String)
    landmark = db.Column(db.String)
    date = db.Column(db.Date)
    time = db.Column(db.Time)
    message = db.Column(db.String)
    
    def __repr__(self):
        return f'<ScheduledJob {self.id} {self.first_name} {self.last_name}>'
    
    
class Message(db.Model, sm):
    __tablename__ = 'messages'
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String, unique=False)
    phone_number = db.Column(db.String)
    message = db.Column(db.String)
    
    def __repr__(self):
        return f'<Message {self.id} {self.first_name} {self.last_name}>'
    
class Image(db.Model, sm):
    __tablename__ = 'images'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image_url = db.Column(db.String)
    redirect_link = db.Column(db.String)
    
    def __repr__(self):
        return f'<Images {self.id} {self.admin_id} {self.image_url}>'