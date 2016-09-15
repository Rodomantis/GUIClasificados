var idClas=1;
$( document ).ready(function() {
    $( "#Persona" ).submit(function( event ) {
	  $.ajax({
		url: "http://localhost/PAgCLas/index.php/persona/", 
		data: $("#Persona").serialize(),
		type: 'POST',
		dataType: 'json',
		success: function(result){
        	alert(result);	
    	}});
	  event.preventDefault();
	  $('#myModal2').modal('show');
	  $('#myModal').modal('hide');
	});
});
$( document ).ready(function() {
    $( "#Usuario" ).submit(function( event ) {
	  $.ajax({
		url: "http://localhost/PAgCLas/index.php/usuario/", 
		data: $("#Usuario").serialize(),
		type: 'POST',
		dataType: 'json',
		success: function(result){
        	alert(result);	
    	}});
	  event.preventDefault();
	  $('#myModal2').modal('hide');
	});
});
/*$( document ).ready(function() {
	var valor=obtenerIDUnico();
	
	$("#Nombres").val("ddddd");
	alert(valor);
});*/
$( document ).ready(function() {
    $( "#anuncio" ).submit(function( event ) {
	  $.ajax({
		url: "http://localhost/PAgCLas/index.php/anuncio/", 
		data: $("#anuncio").serialize(),
		type: 'POST',
		dataType: 'json',
		success: function(result){
        	alert(result);	
    	}});
	  event.preventDefault();
	});
});
$( document ).ready(function() {
	$("#ulBooks").empty();
	$.ajax({
		url: "http://localhost/PAgCLas/index.php/anuncios", 
		dataType: 'json',
		success: function(result){
        	$.each( result, function( key, value ) {
			  //alert( value.IDAnuncio + ": " + value.TituloAnuncio );
			  $("#ulBooks").append("<form><div class='row'><button type='button' class='col-lg-3 btn btn-info btn-lg' style='background-color: red' onclick='location.href=`busqueda.html`; idClas=`"+$("#IDAn").value+"`;'><a href='#'>"+value.TituloAnuncio+
			  "</a></button><p class='col-lg-9 btn btn-info btn-lg' style='background-color: black'>"+value.DetalleAnuncio+"</p><input type='hidden' name='IDAn' value="+value.IDAnuncio+"; ></div><form>");
			});
    }});
});
$( document ).ready(function() {
	$.ajax({
		url: "http://localhost/PAgCLas/index.php/anuncio/"+idClas, 
		dataType: 'json',
		success: function(result){
        	$("#AnuncioPorID").append("<br><b>Anuncio:</b></br> "+result.TituloAnuncio+" <br><b>Detalles:</b></br>"+result.DetalleAnuncio);
    }});
});
$( document ).ready(function() {
	var id = 12;
	$.ajax({
		url: "http://localhost/PAgCLas/index.php/persona/"+id, 
		dataType: 'json',
		success: function(result){
        	$("#infoWM").append("<br><b>Webmaster:</b></br> "+result.Nombres+" "+result.Apellidos+"<br><b>Telefono:</b></br>"
			+result.Telefono+"<br><b>Correo</b></br>"+result.Correo);
    }});
});
function obtenerIDUnico()
{
	var d=new Date();
	var n= d.getTime();
	return n;
}
function comprobarLogin()
{
	var id = $("#inputUsuario").val();
	var pass = $("#inputPassword").val();
	$.ajax({
		url: "http://localhost/PAgCLas/index.php/login/"+id, 
		dataType: 'json',
		success: function(result){
        	if(id==result.IDUsuario && pass==result.Password)
			{
				alert("Login Correcto");
				location.href='insertarAnuncio.html';
			}
			else
			{
				alert("Login Incorrecto");
			}
    }});
}
function cargarAjax(){
	$("#ulBooks").empty();
	$.ajax({
		url: "http://localhost/PAgCLas/index.php/anuncios", 
		dataType: 'json',
		success: function(result){
        	$.each( result, function( key, value ) {
			  //alert( value.IDAnuncio + ": " + value.TituloAnuncio );

			  $("#ulBooks").append("<h4>"+value.TituloAnuncio+"</h4><p>"+value.DetalleAnuncio+"</p>");
			});
    }});
}

function getByIdAjax(){
	//$("#d_book").empty();
	var id = $("#itID").val();
	$.ajax({
		url: "http://localhost/PAgCLas/index.php/anuncio/"+id, 
		dataType: 'json',
		success: function(result){
        	$("#d_book").append("<br><b>Anuncio:</b></br> "+result.TituloAnuncio+" <br><b>Detalles:</b></br>"+result.DetalleAnuncio);
    }});
}