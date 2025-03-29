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
  errorInput(username, "Please enter a username!")
}else{
  const formItem = username.parentElement;
  formItem.classList = "form-content"
}

}
function checkInputEmail(){
  const emailValue = email.value;

  if (emailValue === ""){
    errorInput(email, "Please enter a email!")
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;


  formItem.className = "form-content error"
}
