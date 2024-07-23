// /zerotha/frontend/src/provider/AuthProvider.js

// zerotha/frontend/src/provider/AuthProvider.js
/*import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); // State to store user information

    const login = async (username, password) => {
        // Replace with actual authentication logic
        if (username === 'admin' && password === 'admin123') {
            setUser({
                username: username,
                role: 'admin',
                permissions: ['view_dashboard', 'manage_users', 'view_reports'],
            });
        } else if (username === 'user' && password === 'user123') {
            setUser({
                username: username,
                role: 'user',
                permissions: ['view_dashboard'],
            });
        } else {
            // Handle incorrect credentials
            alert('Invalid username or password');
            return;
        }

        // Redirect to dashboard after successful login
        window.location.href = 'http://localhost:3001'; // Ensure the URL matches your dashboard server's URL
    };

    const logout = () => {
        setUser(null); // Clear user state on logout
        navigate('/signup', { replace: true }); // Redirect to login page after logout
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
*/
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); // State to store user information

    const login = async (username, password) => {
        // Replace with actual authentication logic
        if (username === 'admin' && password === 'admin123') {
            setUser({
                username: username,
                role: 'admin',
                permissions: ['view_dashboard', 'manage_users', 'view_reports'],
            });
           // navigate('/dashboard'); // Redirect to dashboard
           //window.open('http://localhost:3001/','blank_');
           window.location.href = 'http://localhost:3001/';
        } else if (username === 'user' && password === 'user123') {
            setUser({
                username: username,
                role: 'user',
                permissions: ['view_dashboard'],
            });
           // navigate('/dashboard'); // Redirect to dashboard
        

          // window.open('http://localhost:3001/','_self_');
          window.location.href = 'http://localhost:3001/';
        } else {
            // Handle incorrect credentials
            alert('Invalid username or password');
            return;
        }
    };

    const logout = () => {
        setUser(null); // Clear user state on logout
        navigate('/signup', { replace: true }); // Redirect to signup page after logout
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};



