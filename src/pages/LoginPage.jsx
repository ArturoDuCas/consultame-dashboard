import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/login/admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // If the response status is 200 OK, it means the login was successful
        navigate('/redirect');
      } else {
        // Handle unsuccessful login (e.g., show an error message)
        setLoginError(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>

      {loginError && (
        <div role="alert" className="absolute bottom-2 left-2 bg-red-500 text-white p-2 rounded shadow w-60">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Error, wrong credentials.</span>
        </div>
      )}

      <form onSubmit={handleLogin} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input input-bordered input-primary w-full max-w-xs mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered input-primary w-full max-w-xs mb-4"
        />
        <button type="submit" className="btn btn-wide">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
