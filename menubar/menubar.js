function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
    
document.getElementById('drop').addEventListener('click', function () {
       var placesDropdown = document.getElementById('placesDropdown');
       placesDropdown.style.display = (placesDropdown.style.display === 'block') ? 'none' : 'block';
   });
