const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (event) => {
  event.preventDefault();

checkForm();

})

email.addEventListener("blur", () => {
  checkInputEmail();
})

username.addEventListener("blur", () => {
  checkInputUsername();
})

phone.addEventListener("blur", () => {
  checkInputPhone();
})

function checkInputUsername() {
  const usernameValue = username.value;

if (usernameValue === ""){
  errorInput(username, "Nome obrigatório!")
}else{
  const formItem = username.parentElement;
  formItem.className = "form-content"
}

function checkInputPhone() {
  const phoneValue = phone.value;

if (phoneValue === ""){
  errorInput(username, "Nome obrigatório!")
}else{
  const formItem = username.parentElement;
  formItem.className = "form-content"
}

}
function checkInputEmail(){
  const emailValue = email.value;

  if (emailValue === ""){
    errorInput(email, "Email obrigatório!")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }
}
function checkInputPassword () {
  const passwordValue = password.value;

  if (passwordValue === ""){
    errorInput(password, "Senha obrigatória!")
  }else if(passwordValue.length < 8) {
      errorInput(password, "Deve ter mais que 8 caracteres!")
    }else{
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }
}

function checkInputPasswordConfirmation () {
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (passwordConfirmationValue === ""){
    errorInput(passwordConfirmation, "Confirme a senha!")
  }else if(passwordConfirmationValue !== passwordValue) {
    errorInput(passwordConfirmation, "A senha está diferente!")
  }else{
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content"
  }
}

function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItens = form.querySelectorAll(".form-content")
  
  const isValid = [...formItens].every((item) => {
    return item.className === "form-content"
  });

  if (isValid) {
    alert("CADASTRADO ENVIADO COM SUCESSO!")
}

}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;


  formItem.className = "form-content error"
}
