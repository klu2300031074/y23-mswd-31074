import React, { useState } from 'react';
import Timetable from './Timetable';

const User = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Timetable />;
  }

  return (
    <div style={styles.loginPage}>
      <div style={styles.loginContainer}>
        <h2 style={styles.header}>Klerp Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.loginButton}>Login</button>
        </form>
        <p style={styles.registerLink}>
          Not a member? <a href="/register" style={styles.registerLinkAnchor}>Register here</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  loginPage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  loginContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '300px',
  },
  header: {
    color: '#007bff', // Blue color
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#ff0000', // Red color
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  loginButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff', // Blue color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  loginButtonHover: {
    backgroundColor: '#0056b3',
  },
  registerLink: {
    marginTop: '15px',
    color: '#007bff',
  },
  registerLinkAnchor: {
    color: '#ff0000', // Red color
    textDecoration: 'none',
  },
  registerLinkAnchorHover: {
    textDecoration: 'underline',
  },
};

export default User;
