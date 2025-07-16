import React from 'react';
import axios from 'axios';
import { useState } from 'react';
function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axios.post('/api/auth/login', formData)
            .then(response => { 
                console.log('Login successful:', response.data);
                alert('Login Successful');
            }

            )
            .catch(error => {
                console.error('Login failed:', error);
                alert('Login Failed');
            }
            );
        setFormData({
            email: '',
            password: ''
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-container border">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </div>
      </form>
    </div>
  );
}

export default Login;
