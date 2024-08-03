import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setemail] = useState("");
  const [password,   
 setPassword] = useState("");
  const navigate = useNavigate();

  const   
 checkLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({   
 email: email, password }),
      });

      if (response.status === 200)   
 {
        console.log('Login successful!');
        navigate('/contest/problems');
      } else if (response.status === 400) {
        console.log('Invalid email or password');
        alert('Invalid email or password');
      } else {
        console.log('Unexpected response:', response.status);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <section>
      <div className='login-form-parent'>
        <form>
          <div className='form-field'>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className='form-field'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='submit-button' onClick={checkLogin}>
            Login
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
