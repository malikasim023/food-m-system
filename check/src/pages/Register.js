import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  // State to store input data
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [usernameMessage, setUsernameMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/'); // Redirect if logged in
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = async (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });

    // Check username availability
    if (e.target.name === 'username') {
      try {
        const response = await fetch(`http://localhost:3001/api/users/check-username?username=${e.target.value}`);
        const data = await response.json();
        if (!data.available) {
          setUsernameMessage('Username already taken');
        } else {
          setUsernameMessage('');
        }
      } catch (error) {
        console.error('Error checking username availability', error);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if passwords match
    if (userData.password !== userData.confirmPassword) {
      setRegistrationMessage('Passwords do not match.');
      return;  // Stop the form submission if passwords do not match
    }

    try {
      const response = await fetch('http://localhost:3001/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful', data);
        setRegistrationMessage('You have been registered successfully.');
        // Optionally, you can clear the form or redirect the user here
        setUserData({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });

        setTimeout(() => {
          navigate('/login');
        }, 3000); // Redirect after registration
      } else {
        throw new Error('Failed to register');
      }
    } catch (error) {
      console.error('Registration failed', error);
      setRegistrationMessage('Registration failed/Already registered. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-500">
      <div className="border border-black shadow-2xl rounded-lg p-30 ">
        <section className="p-10">
          <h1 className="my-2 text-3xl text-center">Register</h1>
          <p className="text-md">Create your account by filling out the form below.</p>
          <form onSubmit={handleSubmit} className="mt-5 items-center">
            <label htmlFor="username" className="text-lg">Username:</label><br />
            <input type="text" id="username" name="username" placeholder="Enter your Username"
              className="border border-black p-2 mb-3 w-full rounded-md"
              value={userData.username} onChange={handleChange} required /><br />
            {usernameMessage && (
              <p className="text-red-700">{usernameMessage}</p>
            )}
            <label htmlFor="email" className="text-lg">Email:</label><br />
            <input type="email" id="email" name="email" placeholder="Enter your Email"
              className="border border-black p-2 mb-3 w-full rounded-md"
              value={userData.email} onChange={handleChange} required /><br />
            <label htmlFor="password" className="text-lg">Password:</label><br />
            <input type="password" id="password" name="password" placeholder="Enter your Password"
              className="border border-black p-2 mb-3 w-full rounded-md"
              value={userData.password} onChange={handleChange} required /><br />
            <label htmlFor="confirmPassword" className="text-lg">Confirm Password:</label><br />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your Password"
              value={userData.confirmPassword}
              onChange={handleChange}
              className="border border-black p-2 w-full rounded-md"
              required
            /><br/>
            <button type="submit" className="border border-black mt-5 bg-yellow-400 text-lg w-full p-2 rounded-xl">
              Register
            </button>
          </form>
          {registrationMessage && (
            <p className="text-lg mt-4 text-center text-red-700">{registrationMessage}</p>
          )}
          <p className="text-lg mt-4 text-center">
            Already have an account? <Link to="/login" className="text-blue-700 underline">Login here</Link>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Register;
