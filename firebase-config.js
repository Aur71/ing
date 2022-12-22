import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCc6Oqm0hH85sulTguOEM_GIZ62VFx7PC4',
  authDomain: 'ing1-8edbf.firebaseapp.com',
  projectId: 'ing1-8edbf',
  storageBucket: 'ing1-8edbf.appspot.com',
  messagingSenderId: '621353818689',
  appId: '1:621353818689:web:d67895028e90c6825cc4c0',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
