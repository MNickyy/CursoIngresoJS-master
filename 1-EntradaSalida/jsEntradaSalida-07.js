/*
Nicole A. Muller
Ej: 7

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	//txtIdNumeroUno
	//txtIdNumeroDos

	let primerNumero;
	let segundoNumero;
	let resultado;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero + segundoNumero;

	alert("El resultado es: " + resultado);

}

function restar() {

	let primerNumero;
	let segundoNumero;
	let resultado;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero - segundoNumero;

	alert("El resultado es: " + resultado);


}

function multiplicar() {
	let primerNumero;
	let segundoNumero;
	let resultado;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero * segundoNumero;

	alert("El resultado es: " + resultado);
}

function dividir() {
	let primerNumero;
	let segundoNumero;
	let resultado;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero / segundoNumero;

	alert("El resultado es: " + resultado);
}

