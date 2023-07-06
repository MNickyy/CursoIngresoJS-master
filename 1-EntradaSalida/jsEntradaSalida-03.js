/*
Apellido y Nombre: Muller Nicole Alejandra
Ej: E/S 3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar() {
	//Declaramos variable donde se guarda el dato ingresado
	//por el usuario
	var nombreIngresado;


	//Tomar el dato

	//Opción 1
	nombreIngresado = txtIdNombre.value;

	//Opción 2
	//nombreIngresado = document.getElementById("txtIdNombre").value;

	//Mostrar por alert
	alert("su nombre es: " + nombreIngresado);
}


