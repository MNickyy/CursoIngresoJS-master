function mostrar()
{
    let precioIng
    let porcentajeIng

    precioIng = parseFloat(prompt("Ingrese el precio:"));
    porcentajeIng = parseInt(prompt("Ingrese el porcentaje de descuento:"));

    let descuento = precioIng * porcentajeIng / 100;
    let precioTotal = precioIng - descuento;

    elPrecioFinal.value = `El precio final es ${precioTotal}`;

}
