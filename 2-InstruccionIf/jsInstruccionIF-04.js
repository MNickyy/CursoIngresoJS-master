/*
Nicole A. Muller
ej 4 IF
*/
function mostrar() {
	let edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada >= 13 && edadIngresada <= 17) {
		alert("Es adolescente");
	}

}// "&&" significa "y" (si queres que se cumplan los dos o + requisitos)
 // "||" significa "o" (si queres que se cumpla uno u otro requisito)