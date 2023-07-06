/*
Nicole A. Muller
ej 6 IF
*/
function mostrar()
{
	let edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada <= 12)
	{
		alert("Es un niño");
	}
	else if (edadIngresada >= 13 && edadIngresada <= 17)
	{
		alert("Es un adolescente");
	}
	else if (edadIngresada >= 18)
	{
		alert("Es mayor de edad");
	}



}// "&&" significa "y" (si queres que se cumplan los dos o + requisitos)
 // "||" significa "o" (si queres que se cumpla uno u otro requisito)