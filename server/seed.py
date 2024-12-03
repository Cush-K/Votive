from models import db, Admin
from app import app, bcrypt
import os

with app.app_context():
    
    print('Clearing Database...')
    Admin.query.delete()
    

    print('Seeding Admin Data...')
    admin = Admin(
        username="Admin",
        email= "votiveent@gmail.com",
        password=bcrypt.generate_password_hash(os.getenv('PASSWORD')).decode('utf-8')
    )
    db.session.add(admin)
    db.session.commit()
    
    dev = Admin(
        username="Dev",
        email= "kkalvine4@gmail.com",
        password=bcrypt.generate_password_hash(os.getenv('PASSWORD')).decode('utf-8')
    )
    db.session.add(dev)
    db.session.commit()
    
       
    print("Seeding Complete!")
            