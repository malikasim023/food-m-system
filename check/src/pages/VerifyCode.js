import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyCode = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/verify-code', { email, code });
      alert(response.data.message);
      navigate('/reset-password', { state: { email } }); // Redirect to reset password page
    } catch (error) {
      alert('Failed to verify code.');
    }
  };

  return (
    <div>
      <h1>Enter Verification Code</h1>
      <form onSubmit={handleVerify}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your 4-digit code"
          required
        />
        <button type="submit">Verify Code</button>
      </form>
    </div>
  );
};

export default VerifyCode;
