function mostrar()
{
alert("Esto funciona de maravilla");
}




































// 	Para todos los ejercicios utilizar el punto parcial recuperatorio para probar su programa
// y mostrar los datos por console.log o document.write.

// 	// Ejercicio 2:

// 	// una casa de venta de celulares solicita nuestros servicios para desarrollar el siguiente programa:
// 	// tomar 5 pedidos:

// 	// precio (validar mayor a 0).
// 	// definición de la cámara “megapíxeles”(validar entre 9 y 50)
// 	// marca (validar “iphone”, “samsung”, “xiaomi”).
// 	// tamaño.
// 	// resistente al agua(validar “si” o “no”).
// 	// memoria interna del celular(validar 32 o 64)

// 	// a) el precio total que se recaudó.(bruto sin descuento) de los celulares con 32 de memoria interna.
// 	// b) si la venta total supera los 100000 aplicar un descuento del 15% y si supera 200000 aplicar un 25% de descuento, mostrar precio con descuento.
// 	// c) el tamaño y la marca del celular mas caro de 64 de memoria interna.
// 	// d) La marca del celular que sea xiaomi, con menor megapíxeles en la cámara.
// 	// e) la marca de celular mas vendida.

// function mostrar()
// {

// 	// Nicole A. Muller 
// 	// Recuperatorio, ej 1

// 	// do
// 	// {

// 	// } while (!isNaN());

// 	// do
// 	// {

// 	// } while (isNaN());


// 	// Para todos los ejercicios utilizar el punto parcial recuperatorio para probar su programa
// 	// y mostrar los datos por console.log o document.write.

// 	// Ejercicio 1:

// 	// El hospital veterinario “Firulais” nos pide realizar un programa para tomar los siguientes datos:
// 	// pedir el ingreso de datos hasta que el usuario quiera,

// 	// - nombre de la mascota.
// 	// - Vacuna antirrábica (validar “si”, ”no”)
// 	// - Tipo: (Validar “gato”, “perro”, “jirafa”)
// 	// - Peso: (Más de 0)
// 	// - edad (validar que no sea negativo)
// 	// - nombre del veterinario (validar su apellido debe ser (“perez”, “lopez”,”diaz”)
// 	// - genero (validar "macho" o "hembra")

// 	// a)cantidad de mascostas que son machos y que atendio lopez
// 	// b)el gato hembra mas liviano que atendio perez
// 	// c)El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió.
// 	// d)promedio de las edades


// 	let nombreMascota;
// 	let vacunaAntirrabica;
// 	let tipo;
// 	let peso = 0;
// 	let edad;
// 	let nombreVete;
// 	let genero;
// 	let mensaje;

// 	let contadorLopez = 0;
// 	let contadorLopezMachos = 0;
// 	let contadorPerez = 0;
// 	let contadorDiaz = 0;

// 	let doctorMasPacientes;
// 	let primerBandera = true;
// 	let gatoLivianoNombre;
// 	let gatoLivianoPeso = 0;

// 	let totalAnimales = 0;
// 	let acumuladorEdades = 0;
// 	let promedio = 0;
// 	let contadorPacientes = 0;





// 	do
// 	{

// 		do
// 		{
// 			nombreMascota = prompt("Ingrese el nombre de la mascota");
// 		} while (!isNaN(nombreMascota));
// 		do
// 		{
// 			vacunaAntirrabica = prompt("Tiene la vacuna antirrabica? (si o no)");
// 		} while (!isNaN(vacunaAntirrabica) || (vacunaAntirrabica != "si" && vacunaAntirrabica != "no"));
// 		do
// 		{
// 			tipo = prompt("Gato, perro o jirafa").toLowerCase();
// 		} while (!isNaN(tipo) || (tipo != "gato" && tipo != "perro" && tipo != "jirafa"));
// 		do
// 		{
// 			peso = parseFloat(prompt("Ingrese el peso"));
// 		} while (isNaN(peso) || (peso < 0));
// 		do
// 		{
// 			edad = parseInt(prompt("Ingrese la edad"));
// 		} while (isNaN(edad) || (edad < 0));
// 		do
// 		{
// 			nombreVete = prompt("Apellido del veterinario? (perez, lopez o diaz)").toLowerCase();
// 		} while (!isNaN(nombreVete) || (nombreVete != "perez" && nombreVete != "lopez" && nombreVete != "diaz"));
// 		do
// 		{
// 			genero = prompt("(macho o hembra)").toLowerCase();
// 		} while (!isNaN(genero) || (genero != "macho" && genero != "hembra"));

// 		// a)cantidad de mascostas que son machos y que atendio lopez
// 		// b)el gato hembra mas liviano que atendio perez
// 		// c)El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió.
// 		// d)promedio de las edades



// 		switch (nombreVete)
// 		{
// 			case "lopez":

// 				contadorLopez++;

// 				if (genero == "macho")
// 				{

// 					contadorLopezMachos++;
// 				}

// 				break;

// 			case "perez":
// 				contadorPerez++;

// 				if (genero == "hembra")
// 				{
// 					if (tipo == "gato")
// 					{
// 						if (primerBandera == true || peso < gatoLivianoPeso)
// 						{
// 							gatoLivianoNombre = nombreMascota;
// 							gatoLivianoPeso = peso;
// 							primerBandera = false;
// 						}
// 					}
// 				}

// 				break;

// 			case "diaz":
// 				contadorDiaz++;

// 				break;
// 		}



// 		acumuladorEdades += edad;
// 		contadorPacientes++;



// 	} while (confirm("QUiere seguir ingresando más pacientes?"))




// 	promedio = acumuladorEdades / contadorPacientes;

// 	if (contadorDiaz > contadorPerez && contadorDiaz > contadorLopez)
// 	{

// 		doctorMasPacientes = "Diaz"
// 		totalAnimales = contadorDiaz;
// 	} else
// 	{
// 		if (contadorPerez > contadorLopez)
// 		{
// 			doctorMasPacientes = "Perez"
// 			totalAnimales = contadorPerez;
// 		} else
// 		{
// 			doctorMasPacientes = "Lopez"
// 			totalAnimales = contadorLopez;
// 		}
// 	}



// 	mensaje = "a) cantidad de mascotas que son machos y que atendio lopez: " + contadorLopezMachos;
// 	mensaje += "\n b) el gato hembra mas liviano que atendio perez: "
// 	mensaje += "\n nombre: " + gatoLivianoNombre + "peso: " + gatoLivianoPeso;
// 	mensaje += "\n c) El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió."
// 	mensaje += "\n Doctor " + doctorMasPacientes + "pacientes: " + totalAnimales;
// 	mensaje += "\n d) promedio de las edades" + promedio;


// 	alert(mensaje);



// 	//     =  asignar
// 	//     ==  comparar
// 	//     >=  mayor o igual que
// 	//     >  mayor que
// 	//     <  menor que


// }


















// function mostrar()
// {

// 	// Nicole A. Muller 
// 	// Ej 3 


// 	// 	Para todos los ejercicios utilizar el punto parcial recuperatorio para probar su programa
// 	// y mostrar los datos por console.log o document.write.

// 	// Ejercicio 3:

// 	// La agencia “Panal de miel” de transporte que utiliza buques  nos contacta para realizar el siguiente programa:
// 	// tomar pedidos hasta que el usuario quiera. 

// 	// Nombre del buque,
// 	// Nombre del capitán del buque,
// 	// Cantidad de contenedores a llevar (validar que nos sea negativo ni 0),
// 	// Peso de los contenedores (validar entre 10000 y 40000),
// 	// Destino a llevar los contenedores (“buenos aires”, “brasil”, “china”).

// 	// a) El promedio del peso de todos los contenedores . 
// 	// b) El nombre del buque y del capitán, que llevó los contenedores más livianos.
// 	// c)¿Cuál es el destino al que se llevaron la mayor cantidad de contenedores?.


// 	let nombreBuque;
// 	let nombreCapitan;
// 	let cantidadContenedores;
// 	let pesoContenedores;
// 	let destino;

// 	let pesoTotalContenedor = 0;
// 	let contadorContenedores = 0;
// 	let contenedorLiviano;
// 	let nombreBuqueLiviano;
// 	let capitanLiviano;
// 	let primerBandera = true;

// 	let contadorBsAs = 0;
// 	let contadorBrasil = 0;
// 	let contadorChina = 0;
// 	let destinoMasContenedores;

// 	do
// 	{
// 		do
// 		{
// 			nombreBuque = prompt("Nombre del buque");
// 		} while (!isNaN(nombreBuque));
// 		do
// 		{
// 			nombreCapitan = prompt("Nombre del capitan");
// 		} while (!isNaN(nombreCapitan));
// 		do
// 		{
// 			cantidadContenedores = parseInt(prompt("Cantidad de contenedores?"));
// 		} while (isNaN(cantidadContenedores) || (cantidadContenedores <= 0));
// 		do
// 		{
// 			pesoContenedores = parseInt(prompt("Peso contenedor (entre 10000 y 40000"));
// 		} while (isNaN(pesoContenedores) || (pesoContenedores < 10000 || pesoContenedores > 40000));
// 		do
// 		{
// 			destino = prompt("Destino? (buenos aires, brasil o china)").toLowerCase();
// 		} while (!isNaN(destino) || (destino != "buenos aires" && destino != "brasil" && destino != "china"));


// 		switch (destino)
// 		{
// 			case "buenos aires":
// 				contadorBsAs++;
// 				break;
// 			case "brasil":
// 				contadorBrasil++;
// 				break;
// 			case "china":
// 				contadorChina++;
// 				break;
// 		}

// 		if (primerBandera == true || pesoContenedores < contenedorLiviano)
// 		{
// 			contenedorLiviano = pesoContenedores;
// 			nombreBuqueLiviano = nombreBuque;
// 			capitanLiviano = nombreCapitan;

// 			primerBandera = false;
// 		}

// 		pesoTotalContenedor += pesoContenedores;
// 		contadorContenedores++; // mal planteado 

// 	} while (confirm("Desea seguir ingresando más datos?"));

// 	pesoTotalContenedor = pesoTotalContenedor / contadorContenedores;

// 	if (contadorBrasil > contadorBsAs && contadorBrasil > contadorChina)
// 	{
// 		destinoMasContenedores = "Brasil";
// 	} else
// 	{
// 		if (contadorBsAs > contadorChina)
// 		{
// 			destinoMasContenedores = "Buenos Aires";
// 		} else
// 		{
// 			destinoMasContenedores = "China";
// 		}
// 	}

// 	//          =  asignar
// 	// 	//     ==  comparar
// 	// 	//     >=  mayor o igual que
// 	// 	//     >  mayor que
// 	// 	//     <  menor que
// 	mensaje = "a) El promedio del peso de los contenedores es de: " + pesoTotalContenedor;
// 	mensaje += "\n b) Contenedores más livianos: "
// 	mensaje += "\n Nombre del buque: " + nombreBuqueLiviano + "Y su capitan" + capitanLiviano;
// 	mensaje += "\n c) El destino que mayor contenedores se llevaron fue: " + destinoMasContenedores;

// 	alert(mensaje);

// }




















































// function mostrar()
// {


// 	//Nicole A. Muller 
// 	// Ej 2 

// 	// Para todos los ejercicios utilizar el punto parcial recuperatorio para probar su programa
// 	// y mostrar los datos por console.log o document.write.

// 	// Ejercicio 2:

// 	// una casa de venta de celulares solicita nuestros servicios para desarrollar el siguiente programa:
// 	// tomar 5 pedidos:

// 	// precio (validar mayor a 0).
// 	// definición de la cámara “megapíxeles”(validar entre 9 y 50)
// 	// marca (validar “iphone”, “samsung”, “xiaomi”).
// 	// tamaño.
// 	// resistente al agua(validar “si” o “no”)

// 	// a) el precio total que se recaudó.(bruto sin descuento)
// 	// b) si la venta total supera los 150000 aplicar un descuento del 30% , mostrar precio con descuento.
// 	// c) el tamaño y la marca del celular más barato.
// 	// d) La marca del celular que sea resistente al agua, con mayor megapíxeles en la cámara.

// 	let precio;
// 	let definicion;
// 	let marca;
// 	let tamaño;
// 	let resistenteAgua;
// 	let pedidos = 0;
// 	let precioTotal = 0;
// 	let descuento = 0;
// 	let precioDescuento = 0;
// 	let primerBandera = true;
// 	let segundaBandera = true;
// 	let celularBarato;
// 	let tamañoBarato;
// 	let marcaBarato;
// 	let marcaPixe;


// 	//     =  asignar
// 	//     ==  comparar
// 	//     >=  mayor o igual que
// 	//     >  mayor que
// 	//     <  menor que

// 	do
// 	{
// 		do
// 		{
// 			precio = parseInt(prompt("Precio:"));
// 		} while (isNaN(precio) || (precio > 0));
// 		do
// 		{
// 			definicion = parseInt(prompt("Megapixeles? (entre 9 y 50)"));
// 		} while (isNaN(definicion) || (definicion < 9 || definicion > 50));
// 		do
// 		{
// 			marca = prompt("marca? (iphone, samsung o xiaomi)").toLowerCase();
// 		} while (!isNaN(marca) || (marca != "iphone" && marca != "samsung" && marca != "xiaomi"));
// 		do
// 		{
// 			tamaño = parseInt(prompt("Ingrese el nº tamaño "))
// 		} while (isNaN(tamaño))
// 		do
// 		{
// 			resistenteAgua = prompt("Resistente al agua? (si o no)")
// 		} while (!isNaN(resistenteAgua) || (resistenteAgua != "si" && resistenteAgua != "no"));


// 		precioTotal += precio;


// 		if (primerBandera == true || precio < celularBarato)
// 		{
// 			celularBarato = precio
// 			marcaBarato = marca;
// 			tamañoBarato = tamaño;

// 			primerBandera = false;
// 		} else // anidamiento mal, son 2 if diferentes 
// 		{
// 			if (segundaBandera == true && resistenteAgua == "si" || resistenteAgua == "si" && definicion > marcaPixe)
// 			{

// 				// tiene que ser definicion menor a definicionMaxima para que entre
// 				// guardar la marca 
// 				// bajar bandera 
// 				marcaPixe = marca; // equivocacion de variables 
// 				segundaBandera = false;
// 			}
// 		}

// 		// me falto sumar pedidos para salir del while general (pedidos++;)

// 	} while (pedidos < 5);

// 	if (precioTotal > 150000)
// 	{

// 		descuento = precioTotal * 1.3
// 		precioDescuento = precioTotal - descuento;
// 	}

// 	mensaje = "a) El precio total que se recaudo es de: " + precioTotal;
// 	mensaje += "\n b) El precio total con descuento es de: " + precioDescuento;
// 	mensaje += "\n c) La marca del celular más barato fue: " + marcaBarato;
// 	mensaje += "\n y el tamaño es de: " + tamañoBarato;
// 	mensaje += "\n d) La marca del celular con mayor pixeles y resistente al agua es: " + marcaPixe;


// 	alert(mensaje);
// }


























































// function mostrar()
// {

// 	// Nicole A. Muller
// 	// Ej 1 

// 	// Para todos los ejercicios utilizar el punto parcial recuperatorio para probar su programa
// 	// y mostrar los datos por console.log o document.write.

// 	// Ejercicio 1:

// 	// El hospital veterinario “Firulais” nos pide realizar un programa para tomar los siguientes datos:
// 	// pedir el ingreso de datos hasta que el usuario quiera,

// 	// - nombre de la mascota.
// 	// - Vacuna antirrábica (validar “si”, ”no”)
// 	// - Tipo: (Validar “gato”, “perro”, “jirafa”)
// 	// - Peso: (Más de 0)
// 	// - edad (validar que no sea negativo)
// 	// - nombre del veterinario (validar su apellido debe ser (“perez”, “lopez”,”diaz”)

// 	// a) Nombre de la mascota que tenga la vacuna antirrábica y que sea la más joven.
// 	// b) El gato más pesado que se atendió.
// 	// c) El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió.



// 	let nombreMascota;
// 	let vacunaAntirrabica;
// 	let tipo;
// 	let peso = 0;
// 	let edad;
// 	let nombreVete;
// 	let primerBandera = true;
// 	let segundaBandera = true;
// 	let mascotaJoven;
// 	let gatoPeso;
// 	let gatoNombre;

// 	let contadorPerez = 0;
// 	let contadorLopez = 0;
// 	let contadorDiaz = 0;
// 	let veterinarioMasPaciente;
// 	let VeterinarioAnimales;
// 	let mensaje;

// 	do
// 	{

// 		do
// 		{
// 			nombreMascota = prompt("Ingrese el nombre de la mascota");
// 		} while (!isNaN(nombreMascota));
// 		do
// 		{
// 			vacunaAntirrabica = prompt("Tiene la vacuna antirrabica? (si o no)");
// 		} while (!isNaN(vacunaAntirrabica) || (vacunaAntirrabica != "si" && vacunaAntirrabica != "no"));
// 		do
// 		{
// 			tipo = prompt("Gato, perro o jirafa").toLowerCase();
// 		} while (!isNaN(tipo) || (tipo != "gato" && tipo != "perro" && tipo != "jirafa"));
// 		do
// 		{
// 			peso = parseFloat(prompt("Ingrese el peso"));
// 		} while (isNaN(peso) || (peso <= 0));
// 		do
// 		{
// 			edad = parseInt(prompt("Ingrese la edad"));
// 		} while (isNaN(edad) || (edad <= 0));
// 		do
// 		{
// 			nombreVete = prompt("Apellido del veterinario? (perez, lopez o diaz)").toLowerCase();
// 		} while (!isNaN(nombreVete) || (nombreVete != "perez" && nombreVete != "lopez" && nombreVete != "diaz"));


// 		if (primerBandera == true && vacunaAntirrabica == "si" || vacunaAntirrabica == "si" && edad < mascotaJoven)
// 		{
// 			// me falto guardar la edad.
// 			mascotaJoven = nombreMascota;
// 			primerBandera = false;
// 		}

// 		switch (nombreVete)
// 		{
// 			case "perez":
// 				contadorPerez++;
// 				break;
// 			case "lopez":
// 				contadorLopez++;
// 				break;
// 			case "diaz":
// 				contadorDiaz++;
// 				break;
// 		}

// 		if (segundaBandera == true && tipo == "gato" || tipo == "gato" && peso > gatoPeso)
// 		{
// 			gatoPeso = peso;
// 			gatoNombre = nombreMascota;
// 			// me falto bajar la bandera
// 		}

// 	} while (confirm("Desea seguir ingresando datos?"));

// 	if (contadorPerez > contadorDiaz && contadorPerez > contadorLopez)
// 	{
// 		veterinarioMasPaciente = "Perez";
// 		VeterinarioAnimales = contadorPerez;
// 	} else
// 	{
// 		if (contadorDiaz > contadorLopez)
// 		{
// 			veterinarioMasPaciente = "Diaz";
// 			veterinarioMasPaciente = contadorDiaz;
// 			// equivocación de la segunda iniciacion de la variable 
// 		} else
// 		{
// 			veterinarioMasPaciente = "Lopez";
// 			veterinarioMasPaciente = contadorLopez;
// 			// equivocación de la segunda iniciacion de la variable 
// 		}
// 	}

// 	mensaje = "a) El nombre de la mascota que tiene la vacuna y es la más joven: " + mascotaJoven;
// 	mensaje += "\n b) El gato más pesado se llama: " + gatoNombre;
// 	mensaje += "\n con un peso de " + gatoPeso;
// 	mensaje += "\n c) El veterinario que más pacientes tuvo fue: " + veterinarioMasPaciente;
// 	mensaje += "\n atendiendo a " + VeterinarioAnimales + " animales en total";


// 	alert(mensaje);

// }


































// /******************************************************************************

// Enunciado:
// Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
// La empresa dispone de 3 bodegas para almacenar los productos: 
// - Avellaneda (20.000KG)
// - CABA (25.000KG) 
// - Lanus (15.000 KG)

// Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
// una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

// Se debera informar:
// a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
// b) Cual fue la bodega con mas ingresos.
// c) Cual es la bodega mas llena.
// d) Porcentaje disponible de cada bodega.

// *******************************************************************************/
// function mostrar()
// {
// 	let TOTAL_AVELLANEDA = 20000;
// 	let TOTAL_CABA = 25000;
// 	let TOTAL_LANUS = 15000;

// 	let pesoAvellaneda;
// 	let pesoCABA;
// 	let pesoLanus;
// 	let pesoProducto;
// 	let descripcionProducto;
// 	let deposito;
// 	let banderaPrimerPesoIngresado;
// 	let pesoMaximo;
// 	let productoMaximo;
// 	let ingresosCABA;
// 	let ingresosAvellaneda;
// 	let ingresosLanus;
// 	let mensajeDeSalida;

// 	pesoAvellaneda = 0;
// 	pesoCABA = 0;
// 	pesoLanus = 0;
// 	ingresosCABA = 0;
// 	ingresosAvellaneda = 0;
// 	ingresosLanus = 0;
// 	banderaPrimerPesoIngresado = true;

// 	do{

// 		do {
//             deposito = prompt("Ingrese el deposito").toLowerCase();
//         }while(deposito != "avellaneda" && deposito != "caba" && deposito != "lanus");

// 		do{
// 			descripcionProducto = prompt("Ingrese la descripcion del producto");
// 		}while(!isNaN(descripcionProducto));

// 		do{
// 			pesoProducto = prompt("Ingrese el peso del producto");
// 			pesoProducto = parseFloat(pesoProducto);
// 		}while(isNaN(pesoProducto));

// 		if(banderaPrimerPesoIngresado || pesoProducto > pesoMaximo){
// 			pesoMaximo = pesoProducto;
// 			productoMaximo = descripcionProducto;
// 			banderaPrimerPesoIngresado = false;
// 		}

// 		if(deposito == "caba"){
// 			if((pesoCABA + pesoProducto) > TOTAL_CABA){
// 				alert("Deposito lleno");
// 				continue;
// 			}
// 			else{
// 				pesoCABA = pesoProducto+pesoCABA;
// 				ingresosCABA++;
// 			}
// 		}
// 		else{
// 			if(deposito == "avellaneda"){
// 				if((pesoAvellaneda + pesoProducto) > TOTAL_AVELLANEDA){
// 					alert("Deposito lleno");
// 					continue;
// 				}
// 				else{
// 					pesoAvellaneda += pesoProducto;
// 					ingresosAvellaneda++;
// 				}
// 			}
// 			else{
// 				if((pesoLanus + pesoProducto) > TOTAL_LANUS){
// 					alert("Deposito lleno");
// 					continue;
// 				}
// 				else{
// 					pesoLanus += pesoProducto;
// 					ingresosLanus++;
// 				}
// 			}
// 		}

// 	}while(confirm("Desea realizar otro deposito?"));

// 	A:
// 	mensajeDeSalida = "a) El producto con mas peso es: " + productoMaximo + " con " + pesoMaximo + " KG.\ Su promedio es: " + pesoMaximo / (pesoAvellaneda + pesoCABA +pesoLanus);

// 	B:
// 	if(ingresosAvellaneda > ingresosCABA && ingresosAvellaneda > ingresosLanus){
// 		mensajeDeSalida += "\nb) La bodega con mas ingresos es: Avellaneda";
// 	}
// 	else{
// 		if(ingresosCABA > ingresosLanus){
// 			mensajeDeSalida += "\nb) La bodega con mas ingresos es: CABA";
// 		}
// 		else{
// 			mensajeDeSalida += "\nb) La bodega con mas ingresos es: Lanus";
// 		}
// 	}

// 	C:
// 	if(pesoAvellaneda > pesoCABA && pesoAvellaneda > pesoLanus){
// 		mensajeDeSalida += "\nc) La bodega mas llena es: Avellaneda";
// 	}
// 	else{
// 		if(pesoCABA > pesoLanus){
// 			mensajeDeSalida += "\nc) La bodega mas llena es: CABA";
// 		}
// 		else{
// 			mensajeDeSalida += "\nc) La bodega mas llena es: Lanus";
// 		}
// 	}

// 	D:
// 	mensajeDeSalida += "\nd) Avellaneda: %" + pesoAvellaneda * 100 / TOTAL_AVELLANEDA + "\nCABA: % " + pesoCABA * 100 / TOTAL_CABA + "\nLanus: % " + pesoLanus * 100 / TOTAL_LANUS;

// 	alert(mensajeDeSalida);
// }


