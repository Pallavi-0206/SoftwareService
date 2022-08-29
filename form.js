// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyCcLwGjRTc-KaBKP8AX2s_8t3mL1hdta_g",
  authDomain: "softwareservice-caad4.firebaseapp.com",
  projectId: "softwareservice-caad4",
  storageBucket: "softwareservice-caad4.appspot.com",
  messagingSenderId: "272208088016",
  appId: "1:272208088016:web:fbd1d3a35d45e00d3c87d5",
  measurementId: "G-MBWESZV3L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase


const auth = firebase.auth();

// Signup function
function signUp() {
var email = document.getElementById("email");
var password = document.getElementById("password");

const promise = auth.createUserWithEmailAndPassword(
	email.value,
	password.value
);
promise.catch((e) => alert(e.message));
alert("SignUp Successfully");
}

// SignIN function
function signIn() {
var email = document.getElementById("email");
var password = document.getElementById("password");
const promise = auth.signInWithEmailAndPassword(
			email.value, password.value);
promise.catch((e) => alert(e.message));
}

// SignOut
function signOut() {
auth.signOut();
alert("SignOut Successfully from System");
}

// Active user to homepage
firebase.auth().onAuthStateChanged((user) => {
if (user) {
	var email = user.email;
	alert("Active user " + email);
} else {
	alert("No Active user Found");
}
});
