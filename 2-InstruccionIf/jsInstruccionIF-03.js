/* 
Nicole A. Muller
ej 3 IF
*/
function mostrar() {
	let edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada >= 18) {

		alert("Eres mayor de edad");
	}

	else {

		alert("Eres menor de edad");
	}
}

