from models import db, Customer, ScheduledJob, Admin, Message, Image
from app import app, bcrypt
from flask import session
from faker import Faker
import random
from datetime import datetime, date, time


fake = Faker()

with app.app_context():
    
    print('Clearing Database...')
    Customer.query.delete()
    ScheduledJob.query.delete()
    Admin.query.delete()
    Message.query.delete()
    
    print('Seeding Customer data')
    
    customers = []
    for _ in range(30):
        customer = Customer(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.email(),
            phone_number=fake.phone_number(),
            password=bcrypt.generate_password_hash('1234Abcd').decode('utf-8')
        )
        customers.append(customer)
    db.session.add_all(customers)
    db.session.commit()

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
    
    print('Seeding Scheduling Data...')
    scheduledjobs = []
    
    cleaningOptions = [
            'Personal Laundry', 'Duvets and Blankets', 'Curtains', 'Carpets and Upholstery',
            'Wedding Gowns and Garments', 'Pressing', 'Hotels and Restaurants', 'Company Uniforms'
        ]
    
    for _ in range(50):
        scheduledjob = ScheduledJob(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.email(),
            phone_number=fake.phone_number(),
            category=random.choice(cleaningOptions),
            estate=fake.city(),
            apartment=fake.building_number(),
            landmark=fake.street_name(),
            date=fake.date_this_year(),
            time=fake.time_object(),
            message=fake.paragraph()
        )
        scheduledjobs.append(scheduledjob)
    db.session.add_all(scheduledjobs)
    db.session.commit()
    
    print('Scheduling Message Data...')
    messages = []
    for _ in range(20):
        message = Message(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.email(),
            phone_number=fake.phone_number(),
            message=fake.paragraph()
        )
        messages.append(message)
    db.session.add_all(messages)
    db.session.commit()
    
    print('Generating Image Data...')
    
    image1 = Image(
        name = "image1",
        image_url = "https://images.pexels.com/photos/5087727/pexels-photo-5087727.jpeg?auto=compress&cs=tinysrgb&w=400",
        redirect_link = "/"                
    )
    db.session.add(image1)
    db.session.commit()
    
    image2 = Image(
        name = "image2",
        image_url = "https://images.pexels.com/photos/1639932/pexels-photo-1639932.jpeg?auto=compress&cs=tinysrgb&w=400",
        redirect_link = "/about"
    )
    db.session.add(image2)
    db.session.commit()
    
    print("Seeding Complete!")
            