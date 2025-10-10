import React from 'react'
import { useState, useRef } from "react"
import Header from './Header'
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInFform = () => {
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);
        if (message) return;

        // sign-up/ sign-in logic

        if (!isSignInForm) {
            // sign-up logic
            createUserWithEmailAndPassword(auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile
                        (user, {
                            displayName: name.current.value,
                            photoURL: "https://avatars.githubusercontent.com/u/173939779?v=4"
                        })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL
                                }));
                            navigate("/browse");
                        }).catch((error) => {
                            setErrorMessage(error.message);
                        });
                })
                .catch(
                    (error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode + "-" + errorMessage);
                    });
        }
        else {
            // sign-in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });

        }
    }

    // 2 ways: 

    // 1st: either we can use state variables to store the form data and then use it for validation
    // 2nd: we can use useRef hook to get the form data and then use it for validation


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
                onSubmit={(e) => e.preventDefault()}
                className='text-white w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 bg-opacity-80'>
                <h1
                    className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign in" : "Sign up"}
                </h1>
                {!isSignInForm && (<input
                    ref={name}
                    type="text"
                    placeholder="Full Name"
                    className="p-2 my-4 w-full bg-gray-700"
                />)
                }
                <input
                    ref={email}
                    type="text"
                    placeholder="Email address"
                    className="p-2 my-4 w-full bg-gray-700"
                />
                <input
                    ref={password}
                    type="text"
                    placeholder="password"
                    className="p-2 my-4 w-full bg-gray-700"
                />

                <p
                    className='text-red-600 text-lg py-2'>
                    {errorMessage}
                </p>
                <button
                    className='p-4 my-4 bg-red-700 w-full rounded-lg'
                    onClick={handleButtonClick}
                >
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