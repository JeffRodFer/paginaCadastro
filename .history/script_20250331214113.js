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

phone.addEventListener("blur", () => {
  checkInputPhone();
})

username.addEventListener("blur", () => {
  checkInputUsername();
})

function checkInputUsername() {
  const usernameValue = username.value;

if (usernameValue === ""){
  errorInput(username, "Name required!")
}else{
  const formItem = username.parentElement;
  formItem.className = "form-content"
}
}

function checkInputPhone() {
  const phoneValue = phone.value;

if (phoneValue === ""){
  errorInput(phone, "Phone required!")
}else{
  const formItem = phone.parentElement;
  formItem.className = "form-content"
}

}
function checkInputEmail(){
  const emailValue = email.value;

  if (emailValue === ""){
    errorInput(email, "Email required!")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }
}
function checkInputPassword () {
  const passwordValue = password.value;

  if (passwordValue === ""){
    errorInput(password, "Password required!")
  }else if(passwordValue.length < 8) {
      errorInput(password, "Most have more than 8 chacacters!")
    }else{
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }
}

function checkInputPasswordConfirmation () {
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (passwordConfirmationValue === ""){
    errorInput(passwordConfirmation, "Confirm password!")
  }else if(passwordConfirmationValue !== passwordValue) {
    errorInput(passwordConfirmation, "Password is different!")
  }else{
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content"
  }
}

function checkForm(){
  checkInputUsername();
  checkInputPhone();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItens = form.querySelectorAll(".form-content")
  
  const isValid = [...formItens].every((item) => {
    return item.className === "form-content"
  });

  if (isValid) {
    alert("Registration sent sucessfully!")
}

}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;


  formItem.className = "form-content error"
}
<script>
  document.getElementById("resetPage").addEventListener("click", function() {
    location.reload();
  });
</script>
