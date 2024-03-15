import { auth } from "../firebaseConfing/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { useState, useEffect } from 'react';

export default function Register({ email, password }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log('Success');
        })
        .catch(error => {
            console.error('Une erreur :', error.message);
        })
}
