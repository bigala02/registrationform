/* =========================
GET ELEMENTS
========================= */

const form = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordMessage = document.getElementById("passwordMessage");
const successMessage = document.getElementById("successMessage");
const progressBar = document.getElementById("progressBar");
const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const successPopup = document.getElementById("successPopup");
const failPopup = document.getElementById("failPopup");

/* =========================
PROGRESS BAR
========================= */

const trackableFields = form.querySelectorAll("input, select, textarea");

function updateProgress() {
  let filled = 0;
  trackableFields.forEach((field) => {
    if (field.type === "checkbox") {
      if (field.checked) filled++;
    } else if (field.type === "file") {
      if (field.files && field.files.length > 0) filled++;
    } else {
      if (field.value.trim() !== "") filled++;
    }
  });
  const percent = (filled / trackableFields.length) * 100;
  progressBar.style.width = percent + "%";
}

trackableFields.forEach((field) => {
  field.addEventListener("input", updateProgress);
  field.addEventListener("change", updateProgress);
});

/* =========================
IMAGE PREVIEW
========================= */

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
      previewImage.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    previewImage.src = "";
    previewImage.style.display = "none";
  }
});

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
    passwordMessage.style.color = "green";
  }
});

/* =========================
FORM SUBMIT
========================= */

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (password.value !== confirmPassword.value) {
    showFailPopup();
    return;
  }

  showSuccessPopup();
  form.reset();
  previewImage.src = "";
  previewImage.style.display = "none";
  passwordMessage.innerHTML = "";
  progressBar.style.width = "0%";
});

/* =========================
POPUP CONTROLS
========================= */

function showSuccessPopup() {
  successPopup.classList.add("active");
}

function closeSuccessPopup() {
  successPopup.classList.remove("active");
}

function showFailPopup() {
  failPopup.classList.add("active");
}

function closeFailPopup() {
  failPopup.classList.remove("active");
}
