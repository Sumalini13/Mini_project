import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import Register from './Register';
const Login=()=>{
	return(
<div>
<body className='aaa'>
    <center>
        <div class="login-form">
    <section>
        <div className='box'>
            <h1><span id="company-name">MarketPlace for Handmade craft</span> <i class="fas fa-atlas"></i></h1>
            <h3>LOGIN</h3> 
            <form>
                <div className='right'>
                <label for="name">Username</label></div>
                <input type="text" id="name" name="name"></input>
                <br></br>
                <div className='right'>
                <label for="password">Password</label></div>
                <input type="password" id="password" name="password"></input>

                <button>Log in</button>
                
            </form>

            <div class="text-info">
               < Link to="/forget">Forgot password?</Link>
               <Link to ="/Register"><p>Create Account</p></Link>
            </div>
        </div>
    
        <div class="login-img">
            <h1>Handmade Craft</h1>
            <p>Explore the magic of various Hands</p>

        </div>
    </section>
</div>
</center>
</body>
</div>
    )
}

export default Login;
