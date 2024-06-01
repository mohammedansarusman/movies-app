import React from 'react'
import { useState, useRef } from 'react'
import { validateEmail } from './utils/validateEmail';

const Login = () => {
  // experiment:- if we click on email input tag then the border should be red.
  const [clickBorder,setClickBorder] = useState(false);
  const [signActivation, setSignActivation] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);

  const email= useRef(null);
  const password= useRef(null);


  const handleEmailClick = () =>{
    setClickBorder(true);
  }
  const handleFocusOut = () =>{
    setClickBorder(false);
  }
  const handleSignUpClick = () =>{
    setSignActivation(!signActivation);
  }
  const handleSignup = () =>{
    const message=validateEmail(email.current.value,password.current.value);
    setErrorMessage(message);

  }
  return (
    <div className="flex flex-col">
      {console.log("Login componenet")}
      {signActivation ? 
        <div>
          <h3 className="text-white text-2xl  w-[300px] h-[50px] my-4 text-start">Sign In </h3>
        </div> :
        <div>
          <h3 className="text-white text-2xl  w-[300px] h-[50px] my-4 text-start">Sign Up </h3>
        </div> 
      }
      {
        !signActivation && 
          <div className = "w-[300px] h-[50px] my-4 outline outline-1  outline-gray-500">
          <input 
            placeholder='Enter your Name' 
            className = "w-[100%] h-[100%] bg-black/[0.95] outine:none border-gray-500 px-2 text-gray-400 focus:border-gray-300">
          </input>
        </div>
      }
      <div className='w-[300px] h-[50px] my-4 outline outline-1  outline-gray-500'>
        <input 
          ref = {email}
          placeholder='Email address' 
          // onFocus={handleEmailClick}
          // onBlur = {handleFocusOut}
          className ={`w-[100%] h-[100%] bg-black/[0.95] focus:outline-none px-2 border text-gray-200
            ${clickBorder ? 'border-gray-300' : 'border-gray-500'}`
          }>
        </input>
      </div>
      <div className = "w-[300px] h-[50px] my-4 outline outline-1  outline-gray-500">
        <input 
          ref = {password}
          placeholder='Enter your password' 
          className = "w-[100%] h-[100%] bg-black/[0.95] outine:none border-gray-500 px-2 text-gray-400 focus:border-gray-300">
        </input>
      </div>
      {
        signActivation ? 
          <button className='w-[300px] h-[40px] bg-red-600 my-4'>Sign In</button>
        :
          <button className='w-[300px] h-[40px] bg-gray-400 my-4'
                  onClick={handleSignup}
          >Sign Up</button>
      }
      
      {
        signActivation && <span className='text-slate-50 my-3'>New to Netflix ? 
          <strong onClick={handleSignUpClick} className='cursor-pointer'>Sign-up now</strong>
        </span>
      } 
      <span className='text-red-500'>{errorMessage}</span>


    </div>
  )
}

export default Login