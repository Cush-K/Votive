import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useAuth } from './AuthContext'; 
import GoogleLoginButton from "./GoogleLogin";

function Login() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { user, setUser } = useAuth(); 

    useEffect(() => {
        if (user) {
            navigate("/admindashboard");
        }
    }, [user, navigate]);

    const loginSchema = yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required') 
    });

    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await fetch(`/api/login`, {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                });

                if (response.ok) {
                    const data = await response.json(); 
                    setUser(data);
                    setMessage("Login Successful");
                } else {
                    const errorData = await response.json(); 
                    setMessage(errorData.error || "Invalid email or password"); 
                }
            } catch (error) {
                setMessage("An error occurred during login");
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <>
            <div className="login-container">
                <div className="login">
                    <h1>Login as Admin</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.username && touched.username ? "inputError" : ""}
                        />
                        {errors.username && touched.username && <p className="errors">{errors.username}</p>}

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password ? "inputError" : ""}
                        />
                        {errors.password && touched.password && <p className="errors">{errors.password}</p>}

                        <button type="submit" disabled={isSubmitting || loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    {message && <p className="responseMessage">{message}</p>}
                    <GoogleLoginButton />
                </div>
                
            </div>
        </>
    );
}

export default Login;

