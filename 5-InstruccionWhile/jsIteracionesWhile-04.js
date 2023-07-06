/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var claveIngresada = prompt("ingrese un número del 0 al 9.");

	while (claveIngresada < 0 || claveIngresada > 9)
	{
		claveIngresada = prompt("ingrese un número del 0 al 9.");
	}

	document.getElementById("txtIdNumero").value = claveIngresada;

}
