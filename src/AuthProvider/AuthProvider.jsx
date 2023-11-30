
import { GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
    //getAuth
   } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import PropTypes from 'prop-types';






export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password) => {
return createUserWithEmailAndPassword(auth, email, password);
};

const signInUser = (email, password) => {
return signInWithEmailAndPassword(auth, email, password);
};

const signInWithGoogle = () => {
signInWithPopup(auth, googleProvider);
};

const logOut = () => {
setLoading(true);
return signOut(auth);
};
// console.log(user)
useEffect(()=>{
const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
    setLoading(false)
});
return ()=> {
    unSubscribe();
}
},[])

const authInfo = {
user,
loading,
createUser,
signInUser,
signInWithGoogle,
logOut,
};

return (

<AuthContext.Provider value={authInfo}>
{children}</AuthContext.Provider>
);
};

AuthProvider.propTypes = {
children: PropTypes.node.isRequired,
};

export default AuthProvider;

