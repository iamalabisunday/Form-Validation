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
function isValidEmail(email) {
  let emailValue = email.value.trim();

  if (emailValue === "") {
    emailError.textContent = "Enter your email address";
    emailInput.className = "invalid";
    return false;
  }

  if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
    emailError.textContent = "Please enter a valid email address";
    emailInput.className = "invalid";
    return false;
  }

  emailError.textContent = "";
  emailInput.className = "valid";
  return true;
}

// ====== REQUIREMENTS VALIDATION ======

// Uppercase helper function
function hasUppercase(text) {
  if (text.toLowerCase() !== text) {
    return true;
  } else {
    return false;
  }
}
// Lowercase helper function
function haslowercase(text) {
  if (text.toUpperCase() !== text) {
    return true;
  } else {
    return false;
  }
}

// Number helper function
function hasNumber(text) {
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char >= "0" && char <= "9") {
      return true;
    }
  }

  return false;
}

// ====== PASSWORD VALIDATION ======
function isValidPassword(password) {
  let passwordValue = password.value.trim();

  // If Passqword is empty
  if (passwordValue === "") {
    passwordError.textContent = "Enter your password";
    passwordInput.className = "invalid";
    return false;
  }

  // At least 8 characters
  if (passwordValue.length >= 8) {
    r1.className = "req ok";
  } else {
    r1.className = "req";
  }

  // At least one uppercase letter
  if (hasUppercase(passwordValue)) {
    r2.className = "req ok";
  } else {
    r2.className = "req";
  }

  // At least one lowercase letter
  if (haslowercase(passwordValue)) {
    r3.className = "req ok";
  } else {
    r3.className = "req";
  }
  // At least one number
  if (hasNumber(passwordValue)) {
    r4.className = "req ok";
  } else {
    r4.className = "req";
  }
}
// // ====== STORE SUBMISSIONS ======
// let totalFormData = [];

// // ====== FORM SUBMIT ======
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const emailValid = isValidEmail(emailInput.value);
//   const passwordValid = isValidPassword(passwordInput.value);

//   if (emailValid && passwordValid) {
//     formMsg.textContent = "Successful!";
//     formMsg.style.color = "rgba(46, 204, 113, 0.75)";

//     const formData = {
//       emailInput: emailInput.value,
//       passwordInput: passwordInput.value,
//     };

//     totalFormData.push(formData);
//     console.log(totalFormData);

//     form.reset();
//   } else {
//     formMsg.textContent = "Please fix the errors above.";
//     formMsg.style.color = "rgba(231, 76, 60, 0.75)";
//   }
// });
