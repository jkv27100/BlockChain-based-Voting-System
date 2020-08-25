const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


const btn_signin = document.getElementById('signin');
const btn_signup = document.getElementById('signup');
const password = document.getElementById('pass');
const password1 = document.getElementById('pass1');
const warning = document.getElementById('warning');


btn_signin.addEventListener('click',(e) => {
	
	if (password.value == '') {
		warning.innerHTML = 'Please Type the password';	
	}
	else {
		warning.innerHTML = '';
	}

	
});

btn_signup.addEventListener('click',(e) => {

	if (password1.value == '') {
		document.getElementById('warning1').innerHTML = 'Please Type the password';	
	}
	else {
		document.getElementById('warning1').innerHTML = '';
	}

	
});