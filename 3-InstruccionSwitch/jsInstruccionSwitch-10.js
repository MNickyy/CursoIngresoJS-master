function mostrar()
{
	let estacionAño = document.getElementById("txtIdEstacion").value;
	let destinoFinal = document.getElementById("txtIdDestino").value;
	let mensaje;

	switch (estacionAño)
	{

		case "Invierno":
			switch (destinoFinal)
			{

				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "No se viaja";
					break;

				case "Bariloche":
					mensaje = "Se viaja";
					break;

			}
			break;
		case "Verano":
			switch (destinoFinal)
			{

				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja";
					break;
				case "Cordoba":
				case "Bariloche":
					mensaje = "No se viaja";
					break;
			}
			break;
		case "Otoño":
			switch (destinoFinal)
			{

				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
				case "Bariloche":
					mensaje = "Se viaja";
					break;

			}
			break;
		case "Primavera":
			switch (destinoFinal)
			{

				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "Se viaja";
					break;
				case "Bariloche":
					mensaje = "No se viaja";
					break;
			}
			break;
	}

	alert(mensaje);

}// Nicole A. Muller - Switch 10 