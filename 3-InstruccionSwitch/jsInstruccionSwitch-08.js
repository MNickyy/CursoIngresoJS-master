/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{

	let destinoFinal = document.getElementById("txtIdDestino").value;
	let mensaje;

	switch (destinoFinal)
	{

		case "Cataratas":
		case "Mar del plata":
			mensaje = "Calor";
			break;
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Frio";
			break;
	}

	alert(mensaje);

}//Nicole A. Muller - Switch 8