// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  orderBy,
  getDoc,
  doc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMNET_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth();
const storage = getStorage(app);



export async function getWork() {
  const workQuery = query(collection(db, "Work"), orderBy("order", "desc"));
  const querySnapshot = await getDocs(workQuery);
  let dataArray = [];
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    data.id = doc.id;
    dataArray.push(data);
  });
  return dataArray;
}

export function clickedMenuHome() {
  console.log(1);
  logEvent(analytics, "menu_home_link").then((e) => {
    console.log(e);
  });
}

export async function checkAdmin() {
  return await onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      return uid;
    } else {
      console.log("Hello motherfucker");
    }
  });
}

export async function signin(email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("authenticated", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw (errorCode, errorMessage);
    });
}

export async function getHomeMedia() {
  let mediaArr = await (await getDoc(doc(db, "Home", "Images"))).data();
  mediaArr.Videos = await(await getDoc(doc(db, "Home", "Videos"))).data().Videos;
  return mediaArr
}

export async function getAboutMedia() {
  let mediaArr = await (await getDoc(doc(db, "About", "Image"))).data();
  return mediaArr
}