// ====== SELECT ELEMENTS ======
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("btn");
const formMsg = document.getElementById("formMsg");

// ====== EMAIL VALIDATION ======
function isValidEmail(email) {
  const emailValue = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    emailError.textContent = "Enter your email address";
    emailInput.classList.add("inputError");
    return false;
  }

  if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address";
    emailInput.classList.add("inputError");
    return false;
  }

  emailError.textContent = "";
  emailInput.classList.remove("inputError");
  return true;
}

// ====== PASSWORD VALIDATION ======
function isValidPassword(password) {
  const passwordValue = password.trim();
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (passwordValue === "") {
    passwordError.textContent = "Enter your password";
    passwordInput.classList.add("inputError");
    return false;
  }

  if (!passwordRegex.test(passwordValue)) {
    passwordError.textContent =
      "Password must be at least 8 characters, include uppercase, lowercase, number & symbol";
    passwordInput.classList.add("inputError");
    return false;
  }

  passwordError.textContent = "";
  passwordInput.classList.remove("inputError");
  return true;
}

// ====== STORE SUBMISSIONS ======
let totalFormData = [];

// ====== FORM SUBMIT ======
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  const emailValid = isValidEmail(emailValue);
  const passwordValid = isValidPassword(passwordValue);

  if (emailValid && passwordValid) {
    formMsg.textContent = "Successful!";
    formMsg.style.color = "rgba(46, 204, 113, 0.75)";

    const formData = {
      email: emailValue,
      password: passwordValue, // ⚠️ For learning only
      emailValid,
      passwordValid,
    };

    totalFormData.push(formData);
    console.log(totalFormData);

    form.reset();
  } else {
    formMsg.textContent = "Please fix the errors above.";
    formMsg.style.color = "rgba(231, 76, 60, 0.75)";
  }
});
