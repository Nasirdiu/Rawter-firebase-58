import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hook/useFirebase';

const auth =getAuth(app)
const Home = () => {
    const [user]=useAuthState(auth);
    return (
        <div>
            <h1>this is a home</h1>
            <p>{user? user.displayName:'No Name'}</p>
        </div>
    );
};

export default Home;