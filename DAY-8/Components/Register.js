import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./register.css";
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const handleBlur = (e) => {
    // Implement your blur handling logic here, if needed.
  };

  const handleChange = (e) => {
    // Implement your confirm password change handling logic here, if needed.
    const { name, value } = e.target;
    if (name === 'confirm_password') {
      // Handle confirm password logic
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const BASE_URL = "http://localhost:8080";
    axios.post(BASE_URL + '/users/register', { name, email, password,address })
      .then(response => {
        console.log('Registered:', response.data);
        alert("Registered Successfully");
        navigate("/homepage");
      })
      .catch(error => {
        console.error('Registration failed:', error.response.data);
      });
  };



  // ... (existing state and functions) ...

  return (
    <div className='whole'>
      <div className='kl'>
        <form className='registration-form' onSubmit={handleSignUp}>
         <center> <h4>USER REGISTRATION</h4></center>

          <div className="input-field">
            <i className="fas fa-user icon"></i>
            <TextField
              label='UserName'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
              onBlur={handleBlur}
              required
            />
          </div>
          {errors.name && touched.name ? <p>{errors.name}</p> : null}

          <div className="input-field">
            <i className="fas fa-envelope icon"></i>
            <TextField
              label='Email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              onBlur={handleBlur}
              required
            />
          </div>
          {errors.email && touched.email ? <p>{errors.email}</p> : null}

          <div className="input-field">
            <i className="fas fa-lock icon"></i>
            <TextField
              label='Password'
              name='password'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              onBlur={handleBlur}
              required
            />
          </div>
          {errors.password && touched.password ? <p>{errors.password}</p> : null}

          <div className="input-field">
            <i className="fas fa-lock icon"></i>
            <TextField
              label='Confirm Password'
              name='confirm_password'
              type='password'
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          {errors.confirm_password && touched.confirm_password ? <p>{errors.confirm_password}</p> : null}

          <div className="input-field">
            <i className="fas fa-map-marker-alt icon"></i>
            <TextField
              label='Address'
              name='address'
              type='address'
              value={address}
              onChange={e => setAddress(e.target.value)}
              onBlur={handleBlur}
              required
            />
          </div>
          {errors.address && touched.address ? <p>{errors.address}</p> : null}

          <button
            type='submit'
         
            color='primary'
            variant='contained'
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;











