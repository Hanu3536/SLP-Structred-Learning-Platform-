import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import { notification } from 'antd';
import { Link } from 'react-router-dom';


function ForgotPasswordPage() {
  const [username, setUsername] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    Auth.forgotPassword(username)
      .then(data => {
        notification.success({
          message: 'Redirecting you in a few!',
          description: 'Account confirmed successfully!',
          placement: 'topRight',
          duration: 1.5,
          onClose: () => {
            setRedirect(true);
          }
        });
      })
      .catch(err => {
        notification.error({
          message: 'User confirmation failed',
          description: err.message,
          placement: 'topRight',
          duration: 1.5
        });
        setLoading(false);
      });
  };

  return (
    <div>
      <h1 style={{ color: 'white' }} className="header">SLP- Structured Learning Platform</h1>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="text-center" style={{ marginTop: '10px' }}>
            <button
              style={{
                width: '100%',
                backgroundColor: '#4c4456',
                border: '0px',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '4px'
              }}
              type="submit"
              className="login-form-button"
              disabled={loading}
            >
              {loading ? 'Confirming...' : 'Confirm Username'}
            </button>
          </div>
        </form>
        {redirect && (
          <redirect
            to={{
              pathname: '/reset-password',
              search: `?username=${username}`
            }}
          />
        )}
        <div className="text-center" style={{ marginTop: '10px' }}>
          <p>
            <Link to="/login" style={{ color: 'black' }}>Ooh! Wait! I've remembered!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
