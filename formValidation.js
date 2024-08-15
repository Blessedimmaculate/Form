const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const telephone = document.getElementById("telephone");

let error = 0;
const formValidation = (event) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailError = document.getElementById("emailError");
  if (email.value == "") {
    email.style.border = "1px solid red";
    emailError.textContent = "Please enter an email address";
    emailError.style = "color:red";
    //The value of error is increased by 1 (++)
    error++;
  } else if (!email.value.match(emailRegex)) {
    email.style.border = "1px solid red";
    emailError.textContent = "Please enter a valid email address";
    emailError.style = "color:red";
    error++;
  } else {
    email.style.border = "1px solid green";
    emailError.textContent = "";
  }

  // on 17, square is taken in by add function as an argument
  // therefore it becomes a callback
  // function square(c){

  // }
  // function add(a,square){

  // }

  if (password.value == "") {
    password.style.border = "1px solid red";
    passwordError.textContent = "Please enter an password address";
    passwordError.style = "color:red";
    //The value of error is increased by 1 (++)
    error++;
  } else if (password.value.length < 6) {
    password.style.border = "1px solid red";
    passwordError.textContent = "Password  should be atleast six characters";
    passwordError.style = "color:red";
    error++;
  } else {
    password.style.border = "1px solid green";
    passwordError.textContent = "";
  }

  const confirmPasswordError = getElementById("confirmPasswordError");
  if (confirmPassword.value !== password.value) {
    confirmPassword.style.border = "1px solid red";
    confirmPasswordError.textContent = "Passwords don't match";
    confirmPasswordError.style = "color:red";
    //The value of error is increased by 1 (++)
    error++;
  } else {
    confirmPassword.style.border = "1px solid green";
    confirmPasswordError.textContent = "";
  }

  //  TELEPHONE
  const telephoneError = getElementById("telephoneError");
  const internationalPhoneRegex = /^\+\d{1,15}$/;
  const phoneRegex = /^\d{10}$/;
  if (telephone.value == "") {
    telephone.style.border = "1px solid red";
    telephoneError.textContent = "Please enter a telephone number";
    telephoneError.style = "color:red";
    //The value of error is increased by 1 (++)
    error++;
  } else if (
    !email.value.match(phoneRegex) &&
    !telephone.value.match(internationalPhoneRegex)
  ) {
    telephone.style.border = "1px solid red";
    telephoneError.textContent = "Please enter a valid telephone number";
    telephoneError.style = "color:red";
    error++;
  } else {
    telephone.style.border = "1px solid green";
    telephoneError.textContent = "";
  }

  if (error > 0) {
    event.preventDefault();
  }
};
