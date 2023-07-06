/* 
Apellido y Nombre: Muller Nicole Alejandra
Ej: E/S 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/


function mostrar() {
	//creo la variable
	let nombre;

	//guardo el dato con la variable = lugar 
	nombre = prompt("Ingrese su nombre");

	//muestro en donde sale el valor que contiene la variable
	txtIdNombre.value = (nombre);
}

