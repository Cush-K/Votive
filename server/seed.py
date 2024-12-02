from models import db, Customer, ScheduledJob, Admin, Message, Image
from app import app, bcrypt
from flask import session
from faker import Faker
import random
from datetime import datetime, date, time


fake = Faker()

with app.app_context():
    
    print('Clearing Database...')
    Admin.query.delete()
    Message.query.delete()
    Image.query.delete()
    

    print('Seeding Admin Data...')
    admin = Admin(
        username="Admin",
        email= "votiveent@gmail.com",
        password=bcrypt.generate_password_hash('&VotiVe2021').decode('utf-8')
    )
    db.session.add(admin)
    db.session.commit()
    
    dev = Admin(
        username="Dev",
        email= "kkalvine4@gmail.com",
        password=bcrypt.generate_password_hash('&VotiVe2021').decode('utf-8')
    )
    db.session.add(dev)
    db.session.commit()
    
    print('Generating Image Data...')
    images = []
    links = ["/", "/about-votive-laundry", "/contact-votive-laundry"]
    for _ in range(10):
        image = Image(
            name=fake.word(),
            image_url="https://img.freepik.com/premium-photo/black-afro-woman-smiling-cheerfully-feeling-happy-showing-concept-copy-space-with-palm-hand-housekeeping-concept-household-concept_1194-212717.jpg?w=740",
            redirect_link=random.choice(links)
        )
        images.append(image)
    db.session.add_all(images)
    db.session.commit() 
    
    print("Seeding Complete!")
            