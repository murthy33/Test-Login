import React from 'react'
import loginimage from '../assets/loginimage.png';
import logo from '../assets/logo.png';
import '../Styles/Login.css';

function Login() {
  return (
    <div className='login-container'>
      <div className='left'>
        <img src={loginimage} alt='loginamge' className='login-image'></img>
      </div>
      <div className='right'>
        <div className='navbar'>
          <img src={logo} alt='icon' className='icon-image'/>
          <span className='my-work'>MY WORK</span>
        </div>
        <form className='login-form'>
          <h2 className='heading'>Login</h2>
          <label>Email*</label><br/>
          <input type='email' placeholder='Enter Email'/><br/>
          <label>Password*</label><br/>
          <input type='password' placeholder='Enter Password'/><br/>

          <button type='submit'>Login</button>

        </form>
      </div>

    </div>
  )
}

export default Login
