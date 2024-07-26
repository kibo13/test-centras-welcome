import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBilqNM7ekpimk2eOqEdja170JfqFe6zxA',
    authDomain: 'centraswelcome-d4fad.firebaseapp.com',
    projectId: 'centraswelcome-d4fad',
    storageBucket: 'centraswelcome-d4fad.appspot.com',
    messagingSenderId: '539100144651',
    appId: '1:539100144651:web:a0a4ad4fdf1e30a2ea130e',
    measurementId: 'G-XPBJV68P0L',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore, collection, doc, getDocs, addDoc, updateDoc };
