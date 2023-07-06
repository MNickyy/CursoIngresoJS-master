/*
Nicole A. Muller
ej: 6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {

	//declaramos variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//tomar los numeros por ID

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//transformarlos a enteros (parseInt) y sumarlos

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;

	//mostrar el resultado por medio de Alert

	alert("La suma es: " + resultado)

}

/*

 -Variables
	-almacenamos datos en las variables
	-nombres representativos
	-lowCamelCase
	-enteros, cadena de caracteres, textos, caracter, booleanos+

 -Entradas
	-ID
	-prompt


*/