const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignUpBtn = document.getElementById("showSignUp");
const showLoginBtn = document.getElementById("showLogin");

showSignUpBtn.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
});

showLoginBtn.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
});
