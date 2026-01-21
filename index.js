const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const requirements = document.getElementById("requirements");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const submitBtn = document.getElementById("btn");
const formMsg = document.getElementById("formMsg");

// Function to check email validity
function isValidEmail(email) {
  let emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    emailError.textContent = "Enter your email address";
    emailInput.className = "inputError";
    return false;
  } else if (emailRegex.test(emailValue)) {
    emailError.textContent = "";
    return true;
  } else {
    emailError.textContent = "Please enter a valid email address";
    emailInput.className = "inputError";
    return false;
  }
}

// Function to check password validity
function isValidPassword(password) {
  let passwordValue = passwordInput.value.trim();
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (passwordValue === "") {
    passwordError.textContent = "Enter your password";
    passwordInput.className = "inputError";
    return false;
  } else if (passwordRegex.test(passwordValue)) {
    passwordError.textContent = "";
    return true;
  } else {
    passwordError.textContent = "Enter a valid password";
    passwordInput.className = "inputError";
    return false;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValid = isValidEmail(emailInput.value);
  const passwordValid = isValidPassword(passwordInput.value);

  if (emailValid && passwordValid) {
    form.submit();
    formMsg.textContent = "Successful!";
    formMsg.style.color = "rgba(46, 204, 113, 0.75)";
  } else {
    formMsg.textContent = "Please fix the errors above.";
    formMsg.style.color = "rgba(231, 76, 60, 0.75)";
  }

  form.reset();
});
