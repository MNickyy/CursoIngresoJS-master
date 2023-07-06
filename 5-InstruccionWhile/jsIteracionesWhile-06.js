function mostrar()
{
	let contador=0
	let acumulador=0
	let numeroIngresado = 0;
	let promedio=0


	while (contador < 5)
	{


		numeroIngresado = parseInt(prompt("Ingrese un número."));

		acumulador = numeroIngresado + acumulador;

		++contador;

	}

	txtIdSuma.value = acumulador;
	promedio = acumulador / 5;
	txtIdPromedio.value = promedio;


}//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.