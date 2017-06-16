var nombre = document.getElementById("usuarioId");
var contrasena = document.getElementById("pwId");

document.getElementById("buttonId").addEventListener("click", function(val){

		if(nombre.value == ""){
			
			nombre.classList.add('showInput');
		}else{
			nombre.classList.remove('showInput');
		}

		if(contrasena.value.length < 6 || contrasena.value == "123456"){
			contrasena.classList.add('showInput');
		}else{
			contrasena.classList.remove('showInput');
		}

		if(nombre.value != "" && contrasena.value.length >= 6 && contrasena.value != "123456"){

			document.getElementById("linkId").setAttribute("href", "index2.html");
		}
});

function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);
}

function permitirDrop(ev){
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(id_foto));
}


