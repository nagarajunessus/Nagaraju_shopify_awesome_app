import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from '@remix-run/react';
import stylesUrl from "~/styles/setup.css";

export const links = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
};

const SignUpForm = () => {
    const navigate = useNavigate();

  const [userData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users', userData);

      localStorage.setItem('userDetails', JSON.stringify(userData));

      setFormData({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
      });

      console.log('User registered successfully!', response.data);

    navigate("/app/login");

    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="signup-form-container">
      <h1 className='reg-head'>Registration Form</h1>
      <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
        <div className="form-group">
          <label className='signup-label'>Username:</label>
          <input className='signup-inputs' type="text" name="username" value={userData.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className='signup-label'>Email:</label>
          <input className='signup-inputs' type="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className='signup-label'>Password:</label>
          <input className='signup-inputs' type="password" name="password" value={userData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className='signup-label'>Confirm Password:</label>
          <input className='signup-inputs' type="password" name="confirmpassword" value={userData.confirmpassword} onChange={handleChange} />
        </div>
        <button type="submit" className='signup-button'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
