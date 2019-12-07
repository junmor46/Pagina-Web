this.logueado = false;

$("#Entrar").click(function(){
  if ($("#Us").val() == "Junior" && $("#Pass").val() =="279"){
    logueado = true;
    if (logueado == true) {
      window.location = "./page/inicio.html";
    }else{
      Swal.fire("Error");
    }
  }
});

$("#Galeria").click(function(){
window.location = "../page/Galeria.html";
  
});

$("#pdf").click(function(){
  window.location = "../page/pdf.html";

});
$("#Prueba").click(function(){
  window.location = "../page/Prueba.html";

});
$().hover(function(){
  $().hide
});


window.addEventListener("load", function(){
  $("container").fadeIn(1000);
});
