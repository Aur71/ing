import React from 'react';
// HOOKS
import { useContext, useState, useEffect } from 'react';

// FIREBASE
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [articles, setArticles] = useState([]);

  // GETTING THE ARTICLES
  const articlesCollectionRef = collection(db, 'articles');
  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getArticles();
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        showSearch,
        setShowSearch,
        showSidebar,
        setShowSidebar,
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
