function myMenuFunction(){
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}
$(document).ready(function (){

 // Vendos një event për kur mausi largohet nga butoni
 $(".btn").mouseenter(function () {
      
    $(this).css("width", "10rem");
    $(this).css("height", "5rem");
  });

  $(".btn").mouseleave(function () {
  // Kthe madhësinë e butonit në vlerën fillestare
  $(this).css("width", "8rem");
  $(this).css("height", "auto");
 });

 $("#pp").click(function(){
  $(this).fadeToggle(1000); // Efekti fade me 1 sekondë kohë
  $(this).slideToggle(1000); // Efekti slide me 1 sekondë kohë
  });

  
} );