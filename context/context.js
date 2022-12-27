import React from 'react';
// HOOKS
import { useContext, useState, useEffect } from 'react';

// FIREBASE
import { auth } from '../firebase-config';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { db } from '../firebase-config';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  // GETTING USERS
  useEffect(() => {
    const usersCollectionRef = collection(db, 'users');

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), _id: doc.id })));
    };

    return () => getUsers();
  }, [user]);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // REGISTERING A USER TO COLLECTION
      const getUsers = async () => {
        const usersCollectionRef = collection(db, 'users');
        const data = await getDocs(usersCollectionRef);
        const ids = data.docs.map((doc) => doc.data().id);

        if (ids.length > 0 && currentUser !== null) {
          if (!ids.includes(currentUser.uid)) {
            const tempUser = {
              id: currentUser.uid,
              displayName: currentUser.displayName,
              email: currentUser.email,
              photoURL: currentUser.photoURL,
            };
            await addDoc(usersCollectionRef, tempUser);
          }
        }
      };

      getUsers();
    });

    return () => unsubscribe();
  }, []);

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        showSearch,
        setShowSearch,
        showSidebar,
        setShowSidebar,
        googleSignIn,
        logOut,
        users,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
