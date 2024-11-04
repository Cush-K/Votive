import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

const formSchema = yup.object().shape({
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    phone: yup.string()
        .matches(/^\d+$/, 'Phone number should contain only digits')
        .required('Phone is required'),
    category: yup.string().required('Please select a category'),
    estate: yup.string().required('Estate is required'),
    apartment: yup.string().required('Apartment is required'),
    date: yup.date().required('Please select a date'),
    time: yup.string().required('Please choose a time'),
});

const timeOptions = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

function Scheduling() {
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        document.title = 'SCHEDULE PICK UP | Votive Laundry and Dry Cleaning';
    })

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, } = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            category: '',
            estate: '',
            apartment: '',
            landmark: '',
            date: '',
            time: '',
            message: '',
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log('Form data', values);
        },
    });


    return (
        <div>
            <h1>SCHEDULE PICK UP</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="firstname"
                        placeholder='First Name'
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.firstname && errors.firstname && <div className="error">{errors.firstname}</div>}
                </div>

                <div>
                    <input
                        type="text"
                        name="lastname"
                        placeholder='Last Name'
                        value={values.lastname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.lastname && errors.lastname && <div className="error">{errors.lastname}</div>}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.email && errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div>
                    <input
                        type="text"
                        name="phone"
                        placeholder='Phone'
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.phone && errors.phone && <div className="error">{errors.phone}</div>}
                </div>

                <div>
                    <select
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value="" label="Choose an option" />
                        <option value="option1" label="Option 1" />
                        <option value="option2" label="Option 2" />
                    </select>
                    {touched.category && errors.category && <div className="error">{errors.category}</div>}
                </div>

                <div>
                    <input
                        type="text"
                        name="estate"
                        placeholder='Estate'
                        value={values.estate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.estate && errors.estate && <div className="error">{errors.estate}</div>}
                </div>

                <div>
                    <input
                        type="text"
                        name="apartment"
                        placeholder='Apartment, House No., Floor.'
                        value={values.apartment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.apartment && errors.apartment && <div className="error">{errors.apartment}</div>}
                </div>

                <div>
                    <input
                        type="text"
                        name="landmark"
                        placeholder='Closest Landmark'
                        value={values.landmark}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>

                <div>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                            setSelectedDate(date);
                            handleChange({ target: { name: 'date', value: date } });
                        }}
                        onBlur={handleBlur}
                        placeholderText="Select a date"
                        dateFormat="yyyy/MM/dd"
                        // isClearable
                    />
                    {touched.date && errors.date && <div className="error">{errors.date}</div>}
                </div>

                <div>
                    <select
                        name="time"
                        value={values.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value="" label="Choose the time" />
                        {timeOptions.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    {touched.time && errors.time && <div className="error">{errors.time}</div>}
                </div>

                <div>
                    <textarea
                        name="message"
                        placeholder='Leave specific instructions if any.'
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows="4"
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Scheduling;