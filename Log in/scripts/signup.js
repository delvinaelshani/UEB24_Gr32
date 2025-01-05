

function myMenuFunction() {
  var i= document.getElementById("navMenu");
  if(i.className === "nav-menu"){
    i.className += " responsive";
} else {
  i.className = "nav-menu";
}
}

var a = document.getElementById("loginBtn");
let b = document.getElementById("registerBtn");
let x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 0;
  y.style.opacity = 1;
}

function register() {
  x.style.left = "-510px";
  y.style.right= "5px";
  a.className = "btn";
  b.className += "white-btn";
  x.style.opacity = 0;
  y.style.opacity = 1;
}

function checkpassword () {
  let paswsword= document.getElementById("password1").value;
  let confirmpaswsword= document.getElementById("confirm_password").value;
  console.log(paswsword,confirmpaswsword);
  let signupErrorMsg= document.getElementById("signup-error-msg");
  if(paswsword.length !=0){
    if(paswsword==confirmpaswsword){
      alert("You have successfully signed up.");
    }
    else{
      signupErrorMsg.style.color = 'red';
      signupErrorMsg.style.opacity = 1;
    }
  }else{
    alert("Password cant't be empty.");
  }

}
  document.getElementById('drop').addEventListener('click', function (){
    var placesDropdown = document.getElementById('placesDropdown');
    placesDropdown.style.display = (placesDropdown.style.display === 'block') ? 'none' : 'block';
  });
