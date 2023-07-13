import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import Register from './Register';

const Login = () => {
  return (
    <div>
      <body className='aaa'>
        <center>
          <div className="login-form">
            <section>
              <div className='box'>
                <h1><span id="company-name"></span> <i className="fas fa-atlas"></i></h1>
                <h3>LOGIN</h3> 
                <form>
                  <div className='right'>
                    <label htmlFor="name">Username</label>
                  </div>
                  <input type="text" id="name" name="name"></input>
                  <br></br>
                  <div className='right'>
                    <label htmlFor="password">Password</label>
                  </div>
                  <input type="password" id="password" name="password"></input>

                  <button>Log in</button>
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
      </body>
    </div>
  )
}

export default Login;
