// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from '@remix-run/react';
import stylesUrl from "~/styles/setup.css";

export const links = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
};

const LoginForm = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Fetch user data from db.json using json-server
            const response = await axios.get(`http://localhost:3000/users?email=${loginData.email}`);

            if (response.data.length > 0) {
                const user = response.data[0];
                // Check if password matches
                if (user.password === loginData.password) {
                    console.log('Login successful!', user);
                    // Redirect or do something after successful login
                    navigate("/app");
                } else {
                    console.error('Incorrect password');
                }
            } else {
                console.error('User not found');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        // <div className="login-form-container">
        //     <form onSubmit={handleSubmit}>
        //         <div className="form-group">
        //             <label className='login-label'>Email:</label>
        //             <input className='login-inputs' type="email" name="email" value={loginData.email} onChange={handleChange} />
        //         </div>
        //         <div className="form-group">
        //             <label className='login-label'>Password:</label>
        //             <input className='login-inputs' type="password" name="password" value={loginData.password} onChange={handleChange} />
        //         </div>
        //         <button type="submit" className='login-button'>Log In</button>
        //     </form>
        // </div>
         <div className="login-form-container">
            <h1 className='log-head'>Login Form</h1>
         <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
             <div className="form-group">
                 <label className='login-label'>Email:</label>
                 <input className='login-inputs' type="email" name="email" value={loginData.email} onChange={handleChange} />
             </div>
             <div className="form-group">
                 <label className='login-label'>Password:</label>
                 <input className='login-inputs' type="password" name="password" value={loginData.password} onChange={handleChange} />
             </div>
             <button type="submit" className='login-button'>Log In</button>
         </form>
     </div>
    );
};

export default LoginForm;