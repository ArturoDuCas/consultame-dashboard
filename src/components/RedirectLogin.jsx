// RedirectLogin.jsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page after a short delay (for demo purposes)
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 1000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="btn">
        <span className="loading loading-spinner"></span>
        Loading
      </button>
    </div>
  );
};

export default RedirectLogin;
