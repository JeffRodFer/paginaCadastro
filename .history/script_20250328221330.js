const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkInputUsername();
})

function checkInputUsername() {
  const usernameValue = username.value;

if (usernameValue === ""){

}

}
function errorInput(input, message) {
  const formItem = input.parentElement;
  const 
}
