import React, { useEffect } from 'react';

import './register.css';

function Register() {
  useEffect(() => {
    const googleFontsLink = document.createElement('link');
    googleFontsLink.href =
      'https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600';
    googleFontsLink.rel = 'stylesheet';
    googleFontsLink.type = 'text/css';
    document.head.appendChild(googleFontsLink);

    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.href = '//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css';
    fontAwesomeLink.rel = 'stylesheet';
    document.head.appendChild(fontAwesomeLink);

    return () => {
      document.head.removeChild(googleFontsLink);
      document.head.removeChild(fontAwesomeLink);
    };
  }, []);

  return (
    <div >
      <body className='uiui'>
    <div className="testbox">
      <form action="/">
     <center><h1>User Account</h1></center><hr></hr>

        <label htmlFor="name" id="icon">
          <i className="icon-envelope"></i>
        </label>
        <input type="text" name="name" id="name" placeholder="Email" required />
        
        <label htmlFor="name" id="icon1">
          <i className="icon-user"></i>
        </label>
        <input type="text" name="name" id="name" placeholder="Name" required />

        <label htmlFor="name" id="icon2">
          <i className="icon-shield"></i>
        </label>
        <input type="password" name="name" id="name" placeholder="Password" required />
        <p>
          By clicking Register, you agree to our <br></br>
          <a href="#">terms and conditions</a>.
        </p>
        <a href="#" className="button">
          Register
        </a>
      </form>
    </div>
    <div className='awa'>
    </div>

    </body>
    </div>
  );
}

export default Register;
