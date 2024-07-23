// Example in Login.js after successful login
// zerotha/frontend/src/landing_page/signup/Login.js
import React, { useState } from 'react';
import { useAuth } from '../../provider/AuthProvider';
import './Login.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <div className="page-container">
            <div div className="page header">
            <h1>Welcome to Zerotha</h1>
            <p>Please log in to continue</p>
            </div>
            <div className="login-form">
            <h2 ><b>Login</b></h2>
            
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;

  