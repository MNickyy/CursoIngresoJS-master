/*
Nicole A. Muller
ej 7 IF
*/

function mostrar()
{
	let edadIng = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value;

	if (edadIng < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

}//FIN DE LA FUNCIÓN