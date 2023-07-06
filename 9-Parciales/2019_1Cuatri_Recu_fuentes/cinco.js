

let nombreMascota;
	let vacunaAntirrabica;
	let tipo;
	let peso = 0;
	let edad;
	let nombreVete;
	let primerBandera = true;
	let segundaBandera = true;
	let mascotaJoven;
	let gatoPeso;
	let gatoNombre;

	let contadorPerez = 0;
	let contadorLopez = 0;
	let contadorDiaz = 0;
	let veterinarioMasPaciente;
	let VeterinarioAnimales;
	let mensaje;

	do
	{

		do
		{
			nombreMascota = prompt("Ingrese el nombre de la mascota");
		} while (!isNaN(nombreMascota));
		do
		{
			vacunaAntirrabica = prompt("Tiene la vacuna antirrabica? (si o no)");
		} while (!isNaN(vacunaAntirrabica) || (vacunaAntirrabica != "si" && vacunaAntirrabica != "no"));
		do
		{
			tipo = prompt("Gato, perro o jirafa").toLowerCase();
		} while (!isNaN(tipo) || (tipo != "gato" && tipo != "perro" && tipo != "jirafa"));
		do
		{
			peso = parseFloat(prompt("Ingrese el peso"));
		} while (isNaN(peso) || (peso <= 0));
		do
		{
			edad = parseInt(prompt("Ingrese la edad"));
		} while (isNaN(edad) || (edad <= 0));
		do
		{
			nombreVete = prompt("Apellido del veterinario? (perez, lopez o diaz)").toLowerCase();
		} while (!isNaN(nombreVete) || (nombreVete != "perez" && nombreVete != "lopez" && nombreVete != "diaz"));


		if (primerBandera == true && vacunaAntirrabica == "si" || vacunaAntirrabica == "si" && edad < mascotaJoven)
		{
			// me falto guardar la edad.
			mascotaJoven = nombreMascota;
			primerBandera = false;
		}

		switch (nombreVete)
		{
			case "perez":
				contadorPerez++;
				break;
			case "lopez":
				contadorLopez++;
				break;
			case "diaz":
				contadorDiaz++;
				break;
		}

		if (segundaBandera == true && tipo == "gato" || tipo == "gato" && peso > gatoPeso)
		{
			gatoPeso = peso;
			gatoNombre = nombreMascota;
			// me falto bajar la bandera
		}

	} while (confirm("Desea seguir ingresando datos?"));

	if (contadorPerez > contadorDiaz && contadorPerez > contadorLopez)
	{
		veterinarioMasPaciente = "Perez";
		VeterinarioAnimales = contadorPerez;
	} else
	{
		if (contadorDiaz > contadorLopez)
		{
			veterinarioMasPaciente = "Diaz";
			veterinarioMasPaciente = contadorDiaz;
			// equivocación de la segunda iniciacion de la variable 
		} else
		{
			veterinarioMasPaciente = "Lopez";
			veterinarioMasPaciente = contadorLopez;
			// equivocación de la segunda iniciacion de la variable 
		}
	}

	mensaje = "a) El nombre de la mascota que tiene la vacuna y es la más joven: " + mascotaJoven;
	mensaje += "\n b) El gato más pesado se llama: " + gatoNombre;
	mensaje += "\n con un peso de " + gatoPeso;
	mensaje += "\n c) El veterinario que más pacientes tuvo fue: " + veterinarioMasPaciente;
	mensaje += "\n atendiendo a " + VeterinarioAnimales + " animales en total";


	alert(mensaje);

}





















function mostrar()
{

	// A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
	// 	validando los datos ingresados:

	// nombre del titular,
	// 	lugar( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
	// 	temporada(“alta”, “baja”),
	// 	cantidad de días que durará el viaje.
	// importe del viaje
	// altura del pasajero
	// peso del pasajero
	// sexo pasajero(F o M o NB)
	// Viaja con equipaje de mano ?
	// 	paga con mercado, tarjeta o efectivo

	// 1
	// a - cantidad de personas que viajan en cada temporada
	// b - el peso acumulado de todos los que viajan a villa gessel
	// c - el lugar con la mayor cantidad de días acumulados
	// d - la suma de todos los importes

	// 2
	// e - el nombre del más pesado de los pasajeros y el del más liviano
	// f - el lugar donde se pagó el mayor importe
	// g - el nombre de la mujer más alta

	// 3
	// h - Cuál fue la forma de pago más utilizada
	// i - en qué temporada se viajó más
	// j - qué lugar tuvo más pasajeros

	// 4
	// k - qué porcentaje usa equipaje de mano
	// l - que porcentaje hay de cada sexo


	let nombre;
	let lugar;
	let temporada;
	let cantidadDias;
	let importeViaje;
	let altura;
	let peso;
	let sexo;
	let equipajeMano;
	let pago;

	let contadorTempAlta = 0;
	let contadorTempBaja = 0;
	let acumuladorGessel = 0;
	let contadorLugarVG = 0;
	let contadorLugarCrd = 0;
	let contadorLugarPM = 0;
	let lugarMayorDias;
	let mayorDias = 0;
	let sumaImportes = 0;

	let primerBandera = true;
	let pasajeroLivianoPeso = 0;
	let pasajeroPesadoPeso = 0;
	let nombrePasajeroLiviano;
	let nombrePasajeroPesado;
	let segundaBandera = true;
	let lugarMayorImporte;
	let mayorImporte = 0;
	let tercerBandera = true;
	let mujerAltaNombre;
	let mujerAltaAltura = 0;

	let contadorMercado = 0;
	let contadorTarjeta = 0;
	let contadorEfectivo = 0;
	let pagoMasUtilizado;
	let temporadaMasViajada;
	let contadorPasajerosPM = 0;
	let contadorPasajerosVG = 0;
	let contadorPasajerosCrd = 0;
	let lugarMasPasajeros;
	let lugarPasajerosCantidad = 0;

	let mensaje;

	do
	{

		do
		{
			nombre = prompt("Ingrese el nombre del titular");
		} while (!isNaN(nombre));
		do
		{
			lugar = prompt("Puerto Madryn, Villa Gessel o Cordoba").toLowerCase();
		} while (!isNaN(lugar) || (lugar != "puerto madryn" && lugar != "villa gessel" && lugar != "cordoba"));
		do
		{
			temporada = prompt("temporada alta o baja");
		} while (!isNaN(temporada));
		do
		{
			cantidadDias = parseInt(prompt("Cantidad de dias que durara el viaje"));
		} while (isNaN(cantidadDias));
		do
		{
			importeViaje = parseFloat(prompt("Importe del viaje"));
		} while (isNaN(importeViaje));
		do
		{
			altura = parseFloat(prompt("Altura del pasajero"));
		} while (isNaN(altura));
		do
		{
			peso = parseFloat(prompt("Peso"));
		} while (isNaN(peso));
		do
		{
			sexo = prompt("Sexo (F, M O NB)");
		} while (!isNaN(sexo) || (sexo != "F" && sexo != "M" && sexo != "NB"));
		do
		{
			equipajeMano = prompt("Viaja con equipaje en mano? (si o no)");
		} while (isNaN(equipajeMano) || (equipajeMano != "si" && equipajeMano != "no"));
		do
		{
			pago = prompt("Paga con mercado, tarjeta o efectivo?");
		} while (isNaN(pago) || (pago != "mercado" && pago != "tarjeta" && pago != "efectivo"));


		switch (temporada)
		{
			case "alta":
				contadorTempAlta++;

				break;
			case "baja":
				contadorTempBaja++;

				break;
		}

		if (lugar == "villa gessel")
		{
			acumuladorGessel += peso;
		}

		switch (lugar)
		{
			case "puerto madryn":
				contadorLugarPM++;
				contadorPasajerosPM++;

				break;
			case "villa gessel":
				contadorLugarVG++;
				contadorPasajerosVG++;

				break;
			case "cordoba":
				contadorLugarCrd++;
				contadorPasajerosCrd++;

				break;
		}


		if (primerBandera == true)
		{
			pasajeroLivianoPeso = peso;
			nombrePasajeroLiviano = nombre;

			pasajeroPesadoPeso = peso;
			nombrePasajeroPesado = nombre;

			primerBandera = false;
		} else
		{
			if (peso > pasajeroPesadoPeso)
			{
				pasajeroPesadoPeso = peso;
				nombrePasajeroPesado = nombre;
			} else
			{
				if (peso < pasajeroLivianoPeso)
				{
					pasajeroLivianoPeso = peso;
					nombrePasajeroLiviano = nombre;
				}
			}
		}

		//     =  asignar
		//     ==  comparar
		//     >=  mayor o igual que
		//     >  mayor que
		//     <  menor que

		if (segundaBandera == true)
		{
			lugarMayorImporte = lugar;
			mayorImporte = importeViaje;
			segundaBandera = false;

		} else
		{
			if (importeViaje > mayorImporte)
			{
				lugarMayorImporte = lugar;
				mayorImporte = importeViaje;
			}
		}

		if (sexo == "F")
		{
			if (tercerBandera == true)
			{
				mujerAltaAltura = altura;
				mujerAltaNombre = nombre;

				tercerBandera = false;
			} else
			{
				if (altura > mujerAltaAltura)
				{
					mujerAltaAltura = altura;
					mujerAltaNombre = nombre;
				}
			}
		}

		switch (pago)
		{
			case "mercado":
				contadorMercado++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
			case "efectivo":
				contadorEfectivo++;
				break;
		}




		sumaImportes += importeViaje;



	} while (confirm("Desea seguir ingresando más datos?"));



	if (contadorLugarCrd > contadorLugarPM && contadorLugarCrd > contadorLugarVG)
	{
		lugarMayorDias = "Cordoba";
		mayorDias = contadorLugarCrd;
	} else
	{
		if (contadorLugarPM > contadorLugarVG)
		{
			lugarMayorDias = "Puerto Madryn";
			mayorDias = contadorLugarPM;
		} else
		{
			lugarMayorDias = "Villa Gessel"
			mayorDias = contadorLugarVG;
		}
	}

	if (contadorEfectivo > contadorMercado && contadorEfectivo > contadorTarjeta)
	{
		pagoMasUtilizado = "Efectivo";
	} else
	{
		if (contadorMercado > contadorTarjeta)
		{
			pagoMasUtilizado = "Mercado";
		} else
		{
			pagoMasUtilizado = "Tarjeta";
		}
	}

	if (contadorTempAlta > contadorTempBaja)
	{
		temporadaMasViajada = "Temporada alta";
	} else
	{
		temporadaMasViajada = "Temporada baja";
	}

	if (contadorPasajerosPM > contadorPasajerosCrd && contadorPasajerosPM > contadorPasajerosVG)
	{
		lugarMasPasajeros = "Puerto Madryn";
		lugarPasajerosCantidad = contadorPasajerosPM;
	} else
	{
		if (contadorPasajerosCrd > contadorPasajerosVG)
		{
			lugarMasPasajeros = "Cordoba";
			lugarPasajerosCantidad = contadorPasajerosCrd;
		} else
		{
			lugarMasPasajeros = "Villa Gessel";
			lugarPasajerosCantidad = contadorPasajerosVG;
		}
	}


	mensaje = "1) a - cantidad de personas que viajan en cada temporada: ";
	mensaje += " Alta: " + contadorTempAlta + "Baja: " + contadorTempBaja;
	mensaje += "b - el peso acumulado de todos los que viajan a villa gessel: " + acumuladorGessel;
	mensaje += "c - el lugar con la mayor cantidad de días acumulados" + lugarMayorDias;
	mensaje += "con un acumulado total de: " + mayorDias + "dias";
	mensaje += "d - la suma de todos los importes " + sumaImportes;

	mensaje += "2) e - el nombre del más pesado de los pasajeros y el del más liviano: ";
	mensaje += "nombre del más pesado: " + nombrePasajeroPesado + "con un peso de: " + pasajeroPesadoPeso;
	mensaje += "nombre del más liviano: " + nombrePasajeroLiviano + "con un peso de: " + pasajeroLivianoPeso;
	mensaje += "f - el lugar donde se pagó el mayor importe: " + lugarMayorImporte;
	mensaje += "g - el nombre de la mujer más alta " + mujerAltaNombre;

	mensaje += "3) h - Cuál fue la forma de pago más utilizada: " + pagoMasUtilizado;
	mensaje += "i - en qué temporada se viajó más " + temporadaMasViajada;
	mensaje += "j - qué lugar tuvo más pasajeros " + lugarMasPasajeros + "con un total de: " + lugarPasajerosCantidad + "pasajeros.";


	alert(mensaje);
