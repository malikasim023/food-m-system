import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state;

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/reset-password', { email, password });
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      alert('Failed to reset password.');
    }
  };

  return (
    <div>
      <h1>Reset Your Password</h1>
      <form onSubmit={handleReset}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
