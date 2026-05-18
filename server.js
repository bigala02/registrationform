/* =========================
GET ELEMENTS
========================= */

const form = document.getElementById("registerForm");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

const passwordMessage = document.getElementById("passwordMessage");

const successMessage = document.getElementById("successMessage");

/* =========================
PASSWORD MATCH CHECK
========================= */

confirmPassword.addEventListener("keyup", () => {
  if (confirmPassword.value === "") {
    passwordMessage.innerHTML = "";
  } else if (confirmPassword.value !== password.value) {
    passwordMessage.innerHTML = "❌ Password does not match";

    passwordMessage.style.color = "red";
  } else {
    passwordMessage.innerHTML = "✅ Password matched";

    passwordMessage.style.color = "lime";
  }
});

/* =========================
FORM SUBMIT
========================= */

form.addEventListener("submit", (e) => {
  e.preventDefault();

  /* PASSWORD CHECK */

  if (password.value !== confirmPassword.value) {
    successMessage.innerHTML =
      "❌ Registration Failed! Passwords do not match.";

    successMessage.style.color = "red";
  } else {
    successMessage.innerHTML = "✅ Registration Successful!";

    successMessage.style.color = "lime";

    form.reset();

    passwordMessage.innerHTML = "";
  }
});

const successPopup = document.getElementById("successPopup");
const failPopup = document.getElementById("failPopup");

/* SHOW SUCCESS */
function showSuccessPopup() {
  successPopup.classList.add("active");
}

/* CLOSE SUCCESS */
function closeSuccessPopup() {
  successPopup.classList.remove("active");
}

/* SHOW FAIL */
function showFailPopup() {
  failPopup.classList.add("active");
}

/* CLOSE FAIL */
function closeFailPopup() {
  failPopup.classList.remove("active");
}
