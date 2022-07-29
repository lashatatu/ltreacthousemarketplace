import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9pu6UhgBjdCkgXLV-aZM9yKlnds632wU',
  authDomain: 'lt-house-marketplace.firebaseapp.com',
  projectId: 'lt-house-marketplace',
  storageBucket: 'lt-house-marketplace.appspot.com',
  messagingSenderId: '922877899185',
  appId: '1:922877899185:web:4a98166d0d86e3a7040d90',
}
const app = initializeApp(firebaseConfig);

export const db = getFirestore();