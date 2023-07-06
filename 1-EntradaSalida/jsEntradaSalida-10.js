/*
Nicole A. Muller
ej: 10

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {

	let importeIngresado;
	let descuento;
	let importeConDescuento;


	importeIngresado = document.getElementById("txtIdImporte").value;

	importeIngresado = parseInt(importeIngresado);

	descuento = importeIngresado * 25 / 100;

	importeConDescuento = importeIngresado - descuento;



	document.getElementById("txtIdResultado").value = importeConDescuento;




}
