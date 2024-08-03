import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { useContext } from 'react'
// import { AppContext } from './App'

import './Register.css'

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',   
  
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Registration successful');   
        navigate('/login');
        // Handle successful registration (e.g., redirect)
      } else {
        const errorData = await response.json(); // Parse error response
        console.error('Registration failed:', errorData.message || response.statusText);
        // Handle specific error messages from the backend
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network errors
    }
  };

  return (
    <section>
      <div className='register-form-parent'>
        <form>
          <div className='form-field'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className='form-field'>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </div>
          <div className='form-field'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className='submit-button' type="submit" onClick={handleSubmit}>Register</div>
        </form>
      </div>
    </section>
  );
};

export default Register;
