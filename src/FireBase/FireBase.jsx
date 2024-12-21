
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDMWUwfYhEryi6hA31Ycn0_KNzAOUnaU4s",
  authDomain: "resturant-management-106b2.firebaseapp.com",
  projectId: "resturant-management-106b2",
  storageBucket: "resturant-management-106b2.firebasestorage.app",
  messagingSenderId: "941714134153",
  appId: "1:941714134153:web:bfccb3bda5ee2c2c00a258"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth
// echo "# b10a11-client-side-nure-alam-riyal" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/programming-hero-web-course2/b10a11-client-side-nure-alam-riyal.git
// git push -u origin main