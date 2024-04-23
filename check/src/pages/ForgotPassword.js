import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/'); // Redirect to home or dashboard page if already logged in
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/forgot-password', { email });
      alert('Reset code sent to your email.');
      navigate('/reset-password'); // Redirect to reset password page
    } catch (error) {
      alert('Failed to send reset code.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-500">
      <div className="border border-black shadow-2xl rounded-lg p-30 mx-auto">
        <section className="p-10">
          <h1 className="my-2 text-3xl text-center">Forgot Password</h1>
          <p className="text-md">
            Please enter your email address below. <br />
            We'll send you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 items-center">
            <label htmlFor="email" className="text-lg">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              className="border border-black p-2 mb-3 w-full rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="border border-black mt-5 bg-yellow-400 text-lg w-full p-2 rounded-xl">Reset Password</button>
          </form>
          <div>
            <p className="text-lg mt-4 text-center">
              Don't have an account? <Link to="/register" className="text-blue-700 underline">Register here</Link>.
            </p>
            <p className="text-center mt-2">
              <Link to="/login" className="text-blue-700 underline text-lg">Login</Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ForgotPassword;
