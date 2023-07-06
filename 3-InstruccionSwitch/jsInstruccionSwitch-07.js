/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{

	let destinoFinal = document.getElementById("txtIdDestino").value;
	let mensaje;

	switch (destinoFinal)
	{
		case "Bariloche":
			mensaje = "Oeste";
			break;
		case "Cataratas":
			mensaje = "Norte";
			break;
		case "Mar del plata":
		case "Ushuaia":
			mensaje = "Sur";
			break;
	}

	alert(mensaje);


	// txtIdDestino

	// "Bariloche" oeste
	// "Cataratas" norte
	// "Mar del plata" sur
	// "Ushuaia" sur

}//Nicole A. Muller - Switch 7 