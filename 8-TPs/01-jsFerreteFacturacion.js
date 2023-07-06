/*
Nicole A. Muller
tp: 1


1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {

  let primerPrecio;
  let segundoPrecio;
  let tercerPrecio;
  let resultado;

  primerPrecio = document.getElementById("txtIdPrecioUno").value;
  segundoPrecio = document.getElementById("txtIdPrecioDos").value;
  tercerPrecio = document.getElementById("txtIdPrecioTres").value;


  primerPrecio = parseInt(primerPrecio);
  segundoPrecio = parseInt(segundoPrecio);
  tercerPrecio = parseInt(tercerPrecio);

  resultado = primerPrecio + segundoPrecio + tercerPrecio;


  alert("El total es: " + resultado);
}

function Promedio() {

  let primerPrecio;
  let segundoPrecio;
  let tercerPrecio;
  let resultado;
  //let resultadoFinal; (solo sirve para opcion 1)

  primerPrecio = document.getElementById("txtIdPrecioUno").value;
  segundoPrecio = document.getElementById("txtIdPrecioDos").value;
  tercerPrecio = document.getElementById("txtIdPrecioTres").value;

  primerPrecio = parseInt(primerPrecio);
  segundoPrecio = parseInt(segundoPrecio);
  tercerPrecio = parseInt(tercerPrecio);

  //opcion 1
  //resultado=primerPrecio+segundoPrecio+tercerPrecio;

  //resultadoFinal=resultado/3;

  //opcion 2
  resultado = (primerPrecio + segundoPrecio + tercerPrecio) / 3;

  alert("El total es: " + resultado.toFixed());

  //.toFixed () (funcion que sirve para acortar decimales y redondear)

}

function PrecioFinal() {

  let primerPrecio;
  let segundoPrecio;
  let tercerPrecio;
  let resultadoFinal;
  // let precioIva (sirve para opcion 1)

  primerPrecio = document.getElementById("txtIdPrecioUno").value;
  segundoPrecio = document.getElementById("txtIdPrecioDos").value;
  tercerPrecio = document.getElementById("txtIdPrecioTres").value;

  primerPrecio = parseInt(primerPrecio);
  segundoPrecio = parseInt(segundoPrecio);
  tercerPrecio = parseInt(tercerPrecio);

  resultado = primerPrecio + segundoPrecio + tercerPrecio;

  //opcion 1
  //precioIva=resultado*21/100;
  //resultadoFinal=resultado+precioIva;

  //opcion 2
  resultadoFinal = resultado * 21 / 100 + resultado;

  //opcion 3
  //resultadoFinal=resultado*1.21;


  alert("El total es: " + resultadoFinal);
}