/*
Nicole A. Muller
ej: 9 BIS

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/*9 BIS : Debemos lograr tomar el importe por ID ,transformarlo
a entero (parseInt), y tambien pedirle al usuario mediante una 
entrada de datos cual es el aumento a realizar, y luego mostrar 
el importe con el aumento en el TextBox "RESULTADO".*/


function mostrarAumento() {

	//txtIdSueldo

	//crear variable
	let sueldoIngresado
	let aumento
	let sueldoConAumento
	let sueldoFinal


	//tomar datos


	//cuadro
	sueldoIngresado = document.getElementById("txtIdSueldo").value;

	//ventanita
	aumento = prompt("Ingrese el porcentaje del aumento");

	//persear
	aumento = parseInt(aumento);
	sueldoIngresado = parseInt(sueldoIngresado);


	//cuentas
	sueldoConAumento = sueldoIngresado * aumento / 100;
	sueldoFinal = sueldoIngresado + sueldoConAumento;


	//resultado final
	document.getElementById("txtIdResultado").value = sueldoFinal;

}


/*

//variable
let sueldoIngresado;
let aumentoSueldo;
let sueldoConAumento;

//tomar dato
sueldoIngresado = document.getElementById("txtIdSueldo").value;

//persear
sueldoIngresado = parseInt(sueldoIngresado);

//sueldo con aumento de 10%
aumentoSueldo = sueldoIngresado * 10/100;
//2da forma
aumentoSueldo = sueldoIngresado * 0.1;

sueldoConAumento = sueldoIngresado + aumentoSueldo;

//mostrar importe 

document.getElementById("txtIdResultado").value = sueldoConAumento;

*/