import {initializeApp} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,

} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC2W0ZQNDQbcJrhi9jkOQC4h-ZqAKn1hWc",
    authDomain: "muhasebe-8abea.firebaseapp.com",
    projectId: "muhasebe-8abea",
    storageBucket: "muhasebe-8abea.appspot.com",
    messagingSenderId: "321395305665",
    appId: "1:321395305665:web:7d5d494000646bea52f840"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById("login-btn").addEventListener('click', function () {
    const loginEmail = document.getElementById("username").value;
    const loginPassword = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            const user = userCredential.user;

            window.location.href="burger.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("result-box").style.display = "inline";
            document.getElementById("login-div").style.display = "none";
            document.getElementById("result").innerHTML = "Sorry ! <br>" + errorMessage;

        });
});
