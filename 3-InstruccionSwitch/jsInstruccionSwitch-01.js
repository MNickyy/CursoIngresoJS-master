function mostrar()
{
	var mesDelAnio
	var mensaje = "No es un mes valido."

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch (mesDelAnio)
	{
		case "Enero":
			mensaje = "Que comiences bien el año!!!.";
			break;
		case "Marzo":
			mensaje = "A clases!!!.";
			break;
		case "Julio":
			mensaje = "Se vienen las vacaciones!!!.";
			break;
		case "Diciembre":
			mensaje = "Felices fiestas!!!.";
			break;
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN

// el case siempre tiene que romper con el break para que no siga 
// buscando opciones

// Nicole A. Muller
// Switch 1