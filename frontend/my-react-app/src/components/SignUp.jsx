
import React from 'react';
import axios from 'axios';

import { useState } from 'react';
const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);


    axios.post('/api/auth/register', formData)
      .then(response => {
        console.log('Registration successful:', response.data);
        alert('Sign Up Successful');
      })
      .catch(error => {
        console.error('Registration failed:', error);
        alert('Sign Up Failed');
      });
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
        <form className="form">
            <div className= "form-container border">
              <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" required />
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" required />
              </div>
              <button type="submit" onClick={handleSubmit}>Sign Up</button>
            </div>
        </form>

    </div>
  );
}

export default SignUp;
