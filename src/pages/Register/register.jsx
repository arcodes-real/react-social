import React from 'react'
import "./register.css";
import {Link} from 'react-router-dom';

export default function Register() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>MyTribe</h3>
                <span className='loginDesc'>
                    Connect with friends and the world around you on BetaSoc.
                </span>
            </div>
            <div className='loginRight'>
                <div className='loginBox'>
                    <input placeholder='Username' className='loginInput' />
                    <input placeholder='Email' className='loginInput' />
                    <input placeholder='Password' className='loginInput' />
                    <input placeholder='Confirm Password' className='loginInput' />
                    <button className='loginButton'>Sign Up</button>
                    
                    <Link to="/login" style={{textDecoration:"none",display:"flex", justifyContent:"center"}}>
                    <button className='loginRegisterButton'>
                     Log In to your Account
                    </button>
                    </Link>
                    
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}
