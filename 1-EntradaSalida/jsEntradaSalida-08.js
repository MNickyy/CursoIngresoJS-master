/*
Nicole A. Muller
Ej: 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declarar variable
	let numeroDividiendo;
	let numeroDivisor;
	let resto;

	//tomar datos
	//txtIdNumeroDividendo
	//txtIdNumeroDivisor

	numeroDividiendo=document.getElementById("txtIdNumeroDividendo").value;
	numeroDivisor=document.getElementById("txtIdNumeroDivisor").value;

	numeroDividiendo=parseInt(numeroDividiendo);
	numeroDivisor=parseInt(numeroDivisor);

	//buscar el resto
	resto=numeroDividiendo % numeroDivisor;

	//mostrar por alert
	alert("El resto es: " + resto);
}
