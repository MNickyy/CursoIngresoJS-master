/*
Apellido y Nombre: Muller Nicole Alejandra
Ej: E/S 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/


function mostrar() {

	//Declaramos variable donde se guarda el dato ingresado
	//por el usuario
	var suNombre;
	var suEdad;

	//Tomar el dato
	suNombre = txtIdNombre.value;
	suEdad = txtIdEdad.value;

	//Mostrar por alert
	alert("Usted se llama " + suNombre + " y tiene " + suEdad + " años");
}

