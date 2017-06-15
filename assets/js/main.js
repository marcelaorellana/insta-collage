var nombre = document.getElementById("usuarioId");
var contrasena = document.getElementById("pwId");

document.getElementById("linkId").addEventListener("click", function(val){

		

		if(nombre.value.charAt(0) != nombre.value.charAt(0).toUpperCase() || nombre.value == ""){
			
			nombre.classList.add('showInput');
		}else{
			nombre.classList.remove('showInput');
		}


		if(contrasena.value == ""){
			contrasena.classList.add('showInput');
		}else{
			contrasena.classList.remove('showInput');
		}

		if(nombre.value.charAt(0) == nombre.value.charAt(0).toUpperCase() && nombre.value != ""
		 && contrasena.value != ""){

			document.getElementById("linkId").setAttribute("href", "index2.html");

		}

});
