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

// use firebase's signout method.
let logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', function(e) {
    firebase.auth().signOut().then(() => {
        console.log('Logging out...');
        // direct to main login/resgistration page
        e.preventDefault();
        window.location.replace("index.html")
    }).catch(err => {
        console.log(err);
    })
});
