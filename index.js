const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("btn");
const formMsg = document.getElementById("formMsg");

const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const r4 = document.getElementById("r4");

// ====== EMAIL VALIDATION ======
function isValidEmail(input) {
  const value = input.value.trim();

  if (value === "") {
    emailError.textContent = "Enter your email address";
    input.className = "invalid";
    return false;
  }

  if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
    emailError.textContent = "Please enter a valid email address";
    input.className = "invalid";
    return false;
  }

  emailError.textContent = "";
  input.className = "valid";
  return true;
}

// ====== PASSWORD HELPERS ======
function hasUppercase(text) {
  return text.toLowerCase() !== text;
}

function hasLowercase(text) {
  return text.toUpperCase() !== text;
}

function hasNumber(text) {
  for (let char of text) {
    if (char >= "0" && char <= "9") {
      return true;
    }
  }
  return false;
}

// ====== PASSWORD VALIDATION ======
function isValidPassword(input) {
  const value = input.value.trim();
  let isValid = true;

  if (value === "") {
    passwordError.textContent = "Enter your password";
    input.className = "invalid";
    return false;
  }

  // 8 characters
  if (value.length >= 8) {
    r1.className = "req ok";
  } else {
    r1.className = "req";
    isValid = false;
  }

  // uppercase
  if (hasUppercase(value)) {
    r2.className = "req ok";
  } else {
    r2.className = "req";
    isValid = false;
  }

  // lowercase
  if (hasLowercase(value)) {
    r3.className = "req ok";
  } else {
    r3.className = "req";
    isValid = false;
  }

  // number
  if (hasNumber(value)) {
    r4.className = "req ok";
  } else {
    r4.className = "req";
    isValid = false;
  }

  if (isValid) {
    passwordError.textContent = "";
    input.className = "valid";
  } else {
    input.className = "invalid";
  }

  return isValid; // ✅ CRITICAL
}

// ====== ENABLE SUBMIT BUTTON ======
function canEnableSubmit() {
  const emailValid = isValidEmail(emailInput);
  const passwordValid = isValidPassword(passwordInput);

  submitBtn.disabled = !(emailValid && passwordValid);
}

// ====== EVENTS ======
emailInput.addEventListener("input", canEnableSubmit);
passwordInput.addEventListener("input", canEnableSubmit);
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValid = isValidEmail(emailInput);
  const passwordValid = isValidPassword(passwordInput);

  if (emailValid && passwordValid) {
    formMsg.textContent = "Form submitted successfully!";
    formMsg.className = "success";
  } else {
    formMsg.textContent = "Please fix the errors above.";
    formMsg.className = "error";
  }
});
