/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{

	let productos = 0;
	let tipo;

	let barbijo;
	let jabon;
	let alcohol;

	let cantidadUnidades;

	let marca;
	let fabricante;

	let primerBandera=true;
	let segundaBandera=true;
	let alcoholBarato;
	let alcoholCantidad;
	let alcoholFabricante;




	do
	{
		do
		{
			tipo = prompt("Ingrese el tipo (barbijo , jabón o alcohol)").toLowerCase;
		} while (!isNaN(tipo) || (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"));
		do
		{
			precio = parseFloat(prompt("Ingrese el precio (100 - 300)"));
		} while (isNaN(precio) || (precio < 100 || precio > 300));
		do
		{
			cantidadUnidades = parseInt(prompt("Ingrese cantidad de unidades (1-1000)"));
		} while (isNaN(cantidadUnidades) || (cantidadUnidades <= 0 || cantidadUnidades > 1000));
		do{
			marca=prompt("Ingrese la marca").toLowerCase;
		}while (!isNaN(marca));
		do {
			fabricante=prompt("Ingrese el fabricante").toLowerCase;
		}while (!isNaN(fabricante));

		productos++;
	} while (productos < 5);









}
