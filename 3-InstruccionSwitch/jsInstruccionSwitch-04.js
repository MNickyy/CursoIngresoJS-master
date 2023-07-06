/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	var mesDelAnio;
	var mensaje;

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch (mesDelAnio)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 días.";
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 días.";
			break;

		default:
			mensaje = "Este mes tiene 31 días.";
			break;
	}

	alert(mensaje);



}//Nicole A. Muller - Switch 4