// Login.jsx

import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Perform login logic here, and if successful, call onLogin with the user data.
    const success = await performLogin(username, password);
    
    if (success) {
      onLogin();
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

// Dummy login logic for demonstration purposes
const performLogin = async (username, password) => {
  // Implement your actual login logic here
  // For now, let's assume any non-empty credentials are valid
  return username.trim() !== '' && password.trim() !== '';
};

export default Login;
