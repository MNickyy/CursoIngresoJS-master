/*
Nicole A. Muller
ej 5 IF
*/
function mostrar() {
	let edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada < 13 || edadIngresada > 17) {
		alert("No es adolescente");
	}

}