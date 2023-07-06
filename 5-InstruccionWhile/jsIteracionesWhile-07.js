/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador=0;
	let acumulador=0;
	let respuesta;
	let numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';

	while (respuesta == "si"){
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		contador++;

		respuesta=prompt("Desea seguir ingresando números? (si o no)");
	}

	acumulador+=numeroIngresado+acumulador;




	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.