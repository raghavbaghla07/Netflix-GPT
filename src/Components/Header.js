import { useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // ✅ 'user' variable will now be used
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                navigate("/error");
            });
    };

    useEffect(() => {
        // Putting the listener in a const allows us to unsubscribe later
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // This is a cleanup function that unsubscribes from the listener
        // when the component unmounts. It's a good practice for performance.
        return () => unsubscribe();
        // unsubscribe when component unmount


        // ✅ Added dependencies to the array
    }, [dispatch, navigate]);

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
            <img
                className='w-44'
                src={LOGO}
                alt='netflix logo'
            />
            {/* ✅ Conditionally render the button only if a user exists */}
            {user && (
                <div className='flex p-2'>
                    <img
                        className='w-12 h-12'
                        alt="usericon"
                        src={user?.photoURL}
                    />
                    <button onClick={handleSignOut} className='font-bold text-white'>
                        (Sign Out)
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;