// import our functions from ourFunctions.js

// ===== Firebase configuration (start) ==== //
let firebaseConfig = {
    apiKey: "AIzaSyAkmOO1_zkNMeun4ycXGRL6OrlNSBffDuk",
    authDomain: "login-and-register-50ab5.firebaseapp.com",
    projectId: "login-and-register-50ab5",
    storageBucket: "login-and-register-50ab5.appspot.com",
    messagingSenderId: "1043592955163",
    appId: "1:1043592955163:web:bd106c05108c382614bfbe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ===== Firebase configuration (end) ==== //

// button variables
let loginBtn = document.getElementById('loginBtn');
let registerBtn = document.getElementById('registerBtn');
let submitBtn = document.getElementById('submitBtn');
// input field variables
let userInput = document.getElementById('login');
let passInput = document.getElementById('password');


// login tab
loginBtn.addEventListener('click', function (e) {
    userInput.value = "";
    passInput.value = "";
    this.className = 'active';
    registerBtn.className = 'inactive underlineHover';
    submitBtn.value = 'Login';
});

//register tab
registerBtn.addEventListener('click', function (e) {
    userInput.value = "";
    passInput.value = "";
    this.className = 'active';
    loginBtn.className = 'inactive underlineHover';
    submitBtn.value = 'Register';
});

// submit button
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (submitBtn.value === 'Register') {
        // check if any inputs are empty
        if (checkIfInputEmpty(userInput.value, passInput.value)) {
            console.log('Please fill in all fields.');
        } else {
            registerUser(userInput.value, passInput.value);
        }
    } else if (submitBtn.value === 'Login') {
        loginUser(userInput.value, passInput.value);
    }
})

function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            console.log("User successfully created!");
            // clear inputs
            document.getElementById('login').value = '';
            document.getElementById('password').value = '';
        }).catch(err => {
            console.log(err.message);
        })
}

function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('Successfully authenticated!');
            // direct to logic success page
            window.location.href = 'main.html';
        }).catch(err => {
            console.log(err.message);
        })
}
function checkIfInputEmpty(userInput, passInput) {
    if (userInput.length === 0 || passInput.length === 0) {
        return true
    } else {
        return false
    }
}
