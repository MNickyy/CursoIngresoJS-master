
function mostrar() {

    let largoIngresado;
    let anchoIngresado;

    largoIngresado = parseFloat(prompt("Ingrese el largo del rectángulo: "));
    anchoIngresado = parseFloat(prompt("Ingrese el ancho: "));

    let perimetro = (largoIngresado * 2) + (anchoIngresado * 2);

    alert(`El perimetro es: ${perimetro}m`);
}
