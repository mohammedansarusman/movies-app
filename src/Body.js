import React from 'react';
import {netflixLogo } from "./Images/imageLinks";
import Login from './Login';


const Body = () => {

    return (
        <div className="relative w-full h-screen">
            {console.log("Body component rendered")}
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: "url(https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/4b2ac93d-8169-45bb-a174-b0c9eef144a9/AE-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg)" }}
            ></div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent flex items-center justify-center">
                <div className='absolute w-[100%] h-[30px] inset-0'>
                    <h1 className = "text-red-500 absolute left-5 top-5 font-extrabold">Movie App</h1>
                    
                </div>
                <div className = "w-[30%] py-10 bg-black/[0.9] flex justify-center items-center">
                    <Login />
                </div>
            </div>
        </div>
    );
}

export default Body;
