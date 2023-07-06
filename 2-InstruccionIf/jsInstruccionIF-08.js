/*
Nicole A. Muller
ej 8 IF
*/
function mostrar()
{
	let edadIng = parseInt(document.getElementById("txtIdEdad").value);
	let estado = document.getElementById("estadoCivil").value;

	if (edadIng >= 18 && estado == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}



}