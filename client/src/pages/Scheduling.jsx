import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSnackbar } from 'notistack';


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

const cleaningOptions = [
    'Personal Laundry', 'Duvets and Blankets', 'Curtains', 'Carpets and Upholstery',
    'Wedding Gowns and Garments', 'Pressing', 'Hotels and Restaurants', 'Company Uniforms'
];

function Scheduling() {
    const [selectedDate, setSelectedDate] = useState(null);
    const {enqueueSnackbar} = useSnackbar()

    useEffect(() => {
        document.title = 'SCHEDULE PICK UP | Votive Laundry and Dry Cleaning';
    });

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
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
            fetch("http://127.0.0.1:5555/api/schedules", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(values),
            })
                .then((res) => {
                    if (res.ok) {
                        enqueueSnackbar("Order Scheduled successfully", { variant: "success" });
                        resetForm()
                    } else {
                        enqueueSnackbar("Failed to scedule order. Please try again.", { variant: "error" });
                    }
                })
                .catch((error) => {
                    console.error(error);
                    enqueueSnackbar("An error occurred while scheduling your order.", { variant: "error" });
                });
        },
    });

    return (
        <>
        <Navbar />
        <div className="form-page">
            <div className='form-container'> 
            <h1>SCHEDULE PICK UP</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.firstname && errors.firstname ? "error" : ""}
                    />
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={values.lastname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.lastname && errors.lastname ? "error" : ""}
                    />
                </div>

                <div className="form-row">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.email && errors.email ? "error" : ""}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.phone && errors.phone ? "error" : ""}
                    />
                </div>

                <div className="full-width">
                    <select
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.category && errors.category ? "error" : ""}
                    >
                        <option value="" label="Choose an option" />
                        {cleaningOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div className="form-row">
                    <input
                        type="text"
                        name="estate"
                        placeholder="Estate"
                        value={values.estate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.estate && errors.estate ? "error" : ""}
                    />
                    <input
                        type="text"
                        name="apartment"
                        placeholder="Apartment, House No., Floor."
                        value={values.apartment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.apartment && errors.apartment ? "error" : ""}
                    />
                </div>

                <div className="full-width">
                    <input
                        type="text"
                        name="landmark"
                        placeholder="Closest Landmark"
                        value={values.landmark}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>

                <div className="form-row">
                    <DatePicker
                        selected={selectedDate}
                        closeOnScroll={(e) => e.target === document}
                        onChange={(date) => {
                            setSelectedDate(date);
                            handleChange({ target: { name: 'date', value: date.toISOString().split('T')[0] } });
                        }}
                        minDate={new Date()}
                        onBlur={handleBlur}
                        placeholderText="Select a date"
                        dateFormat="yyyy/MM/dd"
                        className={touched.date && errors.date ? "error" : ""}
                    />
                    <select
                        name="time"
                        value={values.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.time && errors.time ? "error" : ""}
                    >
                        <option value="" label="Choose the time" />
                        {timeOptions.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="full-width">
                    <textarea
                        name="message"
                        placeholder="Leave specific instructions if any."
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows="4"
                        className={touched.message && errors.message ? "error" : ""}
                    />
                </div>

                <button className='schedule-btn' type="submit">SCHEDULE PICK UP</button>
            </form>
        </div>
        </div>
        <Footer />
        </>
    );
}

export default Scheduling;
