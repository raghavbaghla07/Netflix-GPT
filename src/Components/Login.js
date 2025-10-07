import React from 'react'
import { useState } from "react"
import Header from './Header'
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInFform = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div>
                <img
                    className='absolute overflow-hidden w-screen h-screen object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg'
                    alt='netflix login page'
                />
            </div>

            <form
                className='text-white w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'> {isSignInForm ? "Sign in" : "Sign up"} </h1>
                {!isSignInForm && (<input
                    type="text"
                    placeholder="Full Name"
                    className="p-2 my-4 w-full bg-gray-700"
                />)
                }
                <input
                    type="text"
                    placeholder="Email address"
                    className="p-2 my-4 w-full bg-gray-700"
                />
                <input
                    type="text"
                    placeholder="password"
                    className="p-2 my-4 w-full bg-gray-700"
                />
                <button
                    className='p-4 my-4 bg-red-700 w-full rounded-lg'>
                    {isSignInForm ? "Sign in" : "Sign up"}
                </button>
                <p
                    className='py-4 cursor-pointer'
                    onClick={toggleSignInFform}>
                    {isSignInForm ? " New to Netflix? sign-up now" : "Already registered? sign in now"} </p>
            </form>


        </div>
    )
}

export default Login;

// react arrow function component export