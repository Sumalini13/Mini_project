import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform validation logic here
    if (username === 'admin' && password === 'admin123') {
      setShowPopup(true);
    }
  };

  return (
    <div>
      <body className='aaa'>
        <center>
          <div className="login-form">
            <section>
              <div className='box'>
                <h1><span id="company-name"></span> <i className="fas fa-atlas"></i></h1>
                <h3>LOGIN</h3>
                <form onSubmit={handleLogin}>
                 
                    <label htmlFor="name">Username</label>
                  
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <br />
                 
                    <label htmlFor="password">Password</label>
                
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                <Link to="/login"> <button type="submit">Log in</button></Link>
                </form>

                <div className="text-info">
                  <Link to="/forget">Forgot password?</Link>
                  <Link to="/Register"><p>Create Account</p></Link>
                </div>
              </div>
              <div className="login-img">
                <div className="fifi">
                  <h1></h1>
                </div>
                <center>
                  <p></p>
                </center>
              </div>
            </section>
          </div>
        </center>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Login Successful!</h2>
              <p>Welcome, {username}!</p>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </body>
    </div>
  );
};

export default Login;
