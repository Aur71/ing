// FIREBASE
import { storage } from '../../firebase-config';
import { ref, deleteObject } from 'firebase/storage';
import { serverTimestamp } from 'firebase/firestore';

// UUID
import { v4 as uuid } from 'uuid';

export function Reducer(state, action) {
  if (action.type === 'SET_ARTICLE') {
    return action.payload;
  }

  if (action.type === 'SET_TITLE') {
    return { ...state, title: action.payload };
  }

  if (action.type === 'SET_BRIEF') {
    return { ...state, brief: action.payload };
  }

  if (action.type === 'SET_THUMBNAIL') {
    return {
      ...state,
      thumbnail: action.payload.url,
      thumbnailName: action.payload.name,
    };
  }

  if (action.type === 'REMOVE_THUMBNAIL') {
    const imageRef = ref(storage, `media/${state.thumbnailName}`);

    deleteObject(imageRef)
      .then(() => {
        console.log('Deleted');
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });

    return { ...state, thumbnail: '', thumbnailName: '' };
  }

  if (action.type === 'ADD_HEADING') {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);

    const tempData = [
      ...state.data,
      {
        id: small_id,
        level: action.payload,
        type: 'heading',
        value: '',
      },
    ];

    return { ...state, data: tempData };
  }

  if (action.type === 'ADD_PARAGRAPH') {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);

    const tempData = [
      ...state.data,
      {
        id: small_id,
        type: 'paragraph',
        value: '',
      },
    ];

    return { ...state, data: tempData };
  }

  if (action.type === 'ADD_IMAGE') {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);

    const tempData = [
      ...state.data,
      {
        id: small_id,
        type: 'image',
        url: '',
        name: '',
      },
    ];

    return { ...state, data: tempData };
  }

  if (action.type === 'DELETE_ITEM') {
    const tempData = state.data.filter((item) => item.id !== action.payload);

    return { ...state, data: tempData };
  }

  if (action.type === 'CHANGE_VALUE') {
    const value = action.payload.e.target.value;
    const id = action.payload.id;

    const tempItems = state.data.map((item) => {
      if (item.id === id) {
        item.value = value;
        return item;
      }

      return item;
    });

    return { ...state, data: tempItems };
  }

  if (action.type === 'HANDLE_IMAGE') {
    const url = action.payload.url;
    const name = action.payload.name;
    const id = action.payload.id;

    const tempData = state.data.map((item) => {
      if (item.id === id) {
        item.url = url;
        item.name = name;
        return item;
      }
      return item;
    });

    return { ...state, data: tempData };
  }

  if (action.type === 'DELETE_IMAGE') {
    const id = action.payload.id;
    const name = action.payload.name;
    const mediaRef = ref(storage, `media/${name}`);

    const tempItem = state.data.map((item) => {
      if (item.id === id) {
        item.url = '';
        item.name = '';
        return item;
      }
      return item;
    });

    deleteObject(mediaRef)
      .then(() => {
        console.log('Deleted');
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });

    return { ...state, data: tempItem };
  }

  if (action.type === 'CLEAR_STATE') {
    localStorage.removeItem('article');

    return {
      author: '',
      title: '',
      brief: '',
      thumbnail: '',
      thumbnailName: '',
      data: [],
      date: '',
    };
  }

  return state;
}
