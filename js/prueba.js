//or with jquery
$(document).ready(function(){
	$('.datepicker').datepicker();
});
$(document).ready(function(){
	$('.select').formSelect();
});
$('#Iniciar').click(function(){
	$('#p1').slideDown();
	$('#Iniciar').hide();
});
$('#Siguiente').click(function(){
	if ($("#p1").show()){
		$("#p1").hide();
	} 
	if ($('.select').val()!="") {
		$("#p2").show();

	}
});