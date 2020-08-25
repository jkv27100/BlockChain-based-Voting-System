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
const password = document.getElementById('pass');
const warning = document.getElementById('warning');


btn_signin.addEventListener('click',(e) => {
	e.preventDefault();
	if (password.value == '') {
		warning.innerHTML = 'Please Type the password';	
	}
	else {
		warning.innerHTML = '';
	}

	
});