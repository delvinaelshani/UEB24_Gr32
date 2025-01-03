const loginForm = document.getElementById("login-form");
const loginButton = document.getElemenById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "username" && password === "password") {
    alert("You have successfully logged in.");
    window.location.href = "home.html";
  } else {
    loginErrorMsg.style.color = 'red';
    loginErrorMsg.style.opacity = 1;

  }
});
