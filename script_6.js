
//*===function play===*//
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn")

icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
    }else{
        mySong.pause();
    }
}

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}
//*function register() {

    /*document.getElementById("login").style.display = "none";
}*/
//* === function hide===*//

/*var a = document.getElementById("loginBtn");
var display = 0;

function register() 
{
    if(display == 1)
    {
        a.style.display = "block";
        display = 0;
    }
    else
    {
        a.style.display = "none";
        display = 1;
    }
}*/
  
  //*=====function click====*//
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

    /*$(document).ready(function() {
        $("#nav-button").click(function() {
            $("login").toggle(1000, function() {
                alert("Hi there")
            });
        });
    });*/

    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;

    }

    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }

/*const loginBtn = document.querySelector('btn white-btn');

loginBtn.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});*/

/*====error function====*/
/*const submit = document.getElementById('submit');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit2 = document.getElementById('submit2');

submit2.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = message;
    inputBox.classList.add('error');
    inputBox.classList.remove('success');
}

const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText ='';
    inputBox.classList.add('success');
    inputBox.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 characters.');
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};*/

/*=== error blank function===*/
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');
const email = document.querySelector('#email');
const password2 = document.querySelector('#password2');
const password3 = document.querySelector('#password3');
const submit2 = document. querySelector('#submit2');


submit.addEventListener('click', (event) => {
    event.preventDefault();

/*    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password2Value = password2.value.trim();
    const password3Value = password3.value.trim();

    if(emailValue === '') {
        setErrorFor(email, 'Email required');
    } else {
        setSuccessFor(email);
    }   
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}*/


    //Username Validation
   if (username.value.trim() == '') {
        error(username, 'username can not be empty');
    } else {
        success(username);
    }
    
});

submit.addEventListener('click', (event) => {
    event.preventDefault();

    //Password validation
    if (password.value.trim() == '') {
        error(password, 'password can not be empty');
    } else {
        success(password);
    }
        
});

submit2.addEventListener('click', (event) => {
    event.preventDefault();

    //Email Validation
    if (email.value.trim() == '') {
        error(email, 'email is required');
    } else {
        success(email);
    }

});

submit2.addEventListener('click', (event) => {
    event.preventDefault();

    //Create password Validation
    if (password2.value.trim() == '') {
        error(password2, 'password is required');
    } else {
        success(password2);
    }
    
});

submit2.addEventListener('click', (event) => {
    event.preventDefault();

    //Confirm password Validation
    if (password3.value.trim() == '') {
        error(password3, 'please confirm your password');
    } else {
        success(password3);
    }
    
});

function error(element, msg) {
    element.style.border = '2px #EF0107 solid';
    const parent = element.parentElement;
    const p = parent.querySelctor('p');
    p.textContent = msg;
    p.style.display = 'block';
}

function success(element){
    element.style.border = '2px #03C03C solid';
    const parent = element.parentElement;
    const p = parent.querySelctor('p');
    p.style.visibility = 'hidden';
}

/*function login() {
    var p = document.getElementById("username");
    p.style.display = "block";
  }*/