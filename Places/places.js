$(document).ready(function(){
    $(()=>{
      $("p#par1").hide();
      $("input#btn12").hide();
      $("input#btn1").on('click',()=>{
          $('p#par1').show(500);
          $("input#btn1").hide(500);
          $("input#btn12").show(1000);
      })
      $("input#btn12").on('click', ()=>{
        $('p#par1').hide(500);
        $("input#btn1").show(1000);
        $("input#btn12").hide(500);
    });


    
  });
});