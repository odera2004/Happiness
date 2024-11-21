import React, { useState } from 'react'
import './LoginSignup.css'


const  LoginSignup = () => {

    const[action,setAction] = useState("Sign up");

    <LoginSignup.css />
  return (
    <div className='container-mx'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className='underline'></div>
        </div>
       <div className='inputs'>
        {action=== "Login"?<div></div>:<div className="input">
            <img src='' alt='' />
            <input type="text" placeholder='Name' />
        </div>}
        

        <div className="input">
            <img src='' alt='' />
            <input type="email" placeholder='Email id'/>
        </div>

        <div className="input">
            <img src='' alt='' />
            <input type="password" placeholder='Password'/>
        </div>
       </div>
       {action==="Sign up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here</span></div>}
       
       <div className="submit-container">
        <div className={action=== "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
        <div className={action=== "Sign up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
       </div>
    </div>
  )
}

export default LoginSignup
