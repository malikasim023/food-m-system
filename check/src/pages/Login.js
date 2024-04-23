import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [loginMessage, setLoginMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true); // Set logged in to true if token is present
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo)
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token); // Store the token
        setLoginMessage('Logged in successfully!');
        setLoggedIn(true); // Update logged in state to true
        setTimeout(() => navigate('/'), 1000); // Redirect to home after login
      } else {
        const errorText = await response.text();
        console.error('Login failed:', errorText);
        alert('Failed to login: ' + errorText);
      }
    } catch (error) {
      console.error('Login request failed', error);
      alert('Failed to log in: ' + error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from storage
    setLoggedIn(false); // Update logged in state to false
    setLoginMessage(''); // Clear login message
    navigate('/login'); // Navigate to login page
  };

  if (loggedIn) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-yellow-500">
         <Link  to="/upload" className="text-blue-700 underline"><button className="text-black font-bold border bg-white mb-20 border-black rounded-xl p-2">upload</button></Link>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-500">
      <div className="border border-black shadow-2xl rounded-lg p-30">
        <section className="p-10">
          <h1 className="my-2 text-3xl text-center">Login to Your Account</h1>
          <form className="mt-5 items-center" onSubmit={handleSubmit}>
            <label htmlFor="Email" className="text-lg">Email:</label><br />
            <input
              type="email"
              id="Email"
              name="email"
              aria-label="Enter your Email"
              placeholder="Enter your Email"
              className="border border-black p-2 mb-3 w-full rounded-md"
              value={loginInfo.email}
              onChange={handleInputChange}
              required
            /><br />
            <label htmlFor="Password" className="text-lg">Password:</label><br />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="Password"
                name="password"
                aria-label="Enter your Password"
                placeholder="Enter your Password"
                className="border border-black p-2 w-full rounded-md"
                value={loginInfo.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <br />
            {loginMessage && <p className="success-message">{loginMessage}</p>}
            <button
              type="submit"
              className="border border-black mt-5 bg-yellow-400 text-lg w-full p-2 rounded-xl"
            >
              Login
            </button>
          </form>
          <div>
            <p className="text-lg mt-4">Don't have an account? <Link
             to="/register" className="text-blue-700 underline">Register here</Link>.</p>
            <p className="text-center mt-2"><Link to="/forgotPassword" className="text-blue-700 underline text-lg">Forgot Password?</Link></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
