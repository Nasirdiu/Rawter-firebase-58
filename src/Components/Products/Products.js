import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hook/useFirebase';

const auth=getAuth(app)
const Products = () => {
    const [user]=useAuthState(auth);
    return (
        <div>
            <h3>{user ?user.displayName:'Ata akta kaj korli'}</h3>
        </div>
    );
};

export default Products;