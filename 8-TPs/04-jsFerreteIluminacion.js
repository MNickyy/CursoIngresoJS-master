
function CalcularPrecio() 
{

    let cantidadLam = parseInt(document.getElementById("txtIdCantidad").value);
    let precioLamp = cantidadLam * 35;
    let marcaLuz = document.getElementById("Marca").value;

    let aux;

    if (cantidadLam >= 6) // A
    {
        aux = 50;
    }
    else
    {
        if (cantidadLam == 5) // B
        {
            if (marcaLuz = "ArgentinaLuz")
            {
                aux = 40;
            }
            else
            {
                aux = 30;
            }

        }
        else
        {
            if (cantidadLam == 4) // C
            {
                if (marcaLuz == "ArgentinaLuz" || marcaLuz == "FelipeLamparas")
                {
                    aux = 25;
                }
                else 
                {
                    aux = 20;
                }

            }
            else
            {
                if (cantidadLam == 3) // D a medias
                {
                    if (marcaLuz == "ArgentinaLuz")
                    {
                        aux = 15;
                    }
                    else
                    {
                        if (marcaLuz == "FelipeLamparas")
                        {
                            aux = 10;
                        }
                        else
                        {
                            aux = 5;
                        }
                    }
                }
            }
        }
    }

    let precioDescuentoTotal = precioLamp - (precioLamp * aux / 100);

    // E. Si el importe final con descuento suma más de $120 se debe sumar 
    // un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: 
    // ”IIBB Usted pago X”, siendo X el impuesto que se pagó.

    if (precioDescuentoTotal > 120) // Opción 1
    {
        let impuesto = precioDescuentoTotal * 10 / 100; // saco el 10%
        precioDescuentoTotal = precioDescuentoTotal + impuesto; //sumo el total + impuesto
        alert(`Usted pago $${precioDescuentoTotal}, siendo $${impuesto} el impuesto que se pagó.`);
    }

    txtIdprecioDescuento.value = precioDescuentoTotal;
}
/*
Nicole A. Muller
TP 4
*/
