class Casa{}

function mostrar()
{

	let test = "prueba";
	let test2 = 5;
	let test3 = false;
	let test4 = function(){};
	let casa = new Casa();
	let casa2 = new Casa();

	var miArray = new Array();
	var acum=0;
	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
		acum+=miArray[i];

	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");


	}

	document.write("<h1> La suma de todos los numeros es: "+acum+"</h1>")


	


}//FIN DE LA FUNCIÓN