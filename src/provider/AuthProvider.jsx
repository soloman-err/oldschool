import axios from 'axios';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  // providers:
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // create a new user:
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update an user profile:
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // email/password sign in:
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in:
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user state observer:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post('http://localhost:2000/jwt', {
            email: currentUser.email,
          })
          .then((data) => {
            localStorage.setItem('access_token', data.data);
            setLoading(false);
          });
      } else {
        localStorage.removeItem('access_token');
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // logging out:
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    signIn,
    googleSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
