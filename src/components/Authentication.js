import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from '../utils/firebase';

const Authentication = () => {
  
    const navigate = useNavigate();

    const dispatch = useDispatch();
  
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
        
        if (user) {
            
            const { uid, email, displayName, photoURL, phoneNumber, providerData } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL, phoneNumber: phoneNumber, providerData: providerData }));
            
            navigate('/browse');
        }

        else {
            
            dispatch(removeUser());
            
            if (window.location.pathname === '/browse') navigate('/');
        }
    });

    return () => unsubscribe();

  }, []);
    
    return null;
}

export default Authentication;