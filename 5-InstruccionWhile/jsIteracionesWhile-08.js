/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	let numeroIngresado;


	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';


	while (respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			if (numeroIngresado < 0)
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;

				contador = contador + 1;
			}
		}


		respuesta = prompt("Desea seguir cargando números?")
	}

	txtIdSuma.value = sumaPositivos;

	if (contador == 0)
	{
		multiplicacionNegativos = 0;
	}

	txtIdProducto.value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN