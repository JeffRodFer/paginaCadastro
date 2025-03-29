const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
})

function checkInputUsername() {
  const usernameValue = username.value;

if (usernameValue === ""){
  errorInput(username, "Please enter a username!")
}else{
  const formItem = username.parentElement;
  formItem.className = "form-content"
}

}
function checkInputEmail(){
  const emailValue = email.value;

  if (emailValue === ""){
    errorInput(email, "Please enter a email!")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }
}
function checkInputPassword () {
  const passwordValue = password.value;

  if (passwordValue === ""){
    errorInput(password, "Please enter a password!")
  }else if(passwordValue.length < 8) {
      errorInput(password, "Password must be at 8 characters long!")
    }else{
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }
}

function checkInputPasswordConfirmation () {
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (passwordConfirmationValue === ""){
    errorInput(passwordConfirmation, "Please enter a password confirmation!")
  }else if(passwordConfirmationValue !== passwordValue) {
    errorInput(passwordConfirmation, "Password confirmation does not match!")
  }else{
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content"
  }
}
function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;


  formItem.className = "form-content error"
}
