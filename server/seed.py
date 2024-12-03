from models import db, Admin
from app import app, bcrypt
import os

with app.app_context():
    
    print('Clearing Database...')
    Admin.query.delete()
    

    print('Seeding Admin Data...')
    admin = Admin(
        username="Admin",
        email= os.getenv('ADMIN_EMAIL'),
        password=bcrypt.generate_password_hash(os.getenv('PASSWORD')).decode('utf-8')
    )
    db.session.add(admin)
    db.session.commit()
    
    dev = Admin(
        username="Dev",
        email= os.getenv('DEV_EMAIL'),
        password=bcrypt.generate_password_hash(os.getenv('PASSWORD')).decode('utf-8')
    )
    db.session.add(dev)
    db.session.commit()
    
       
    print("Seeding Complete!")
            