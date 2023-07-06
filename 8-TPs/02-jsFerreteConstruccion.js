
function Rectangulo() {
    txtIdLargo
    txtIdAncho
    txtIdRadio

    let largoTerreno;
    let anchoTerreno;
    let perimetro;
    let total;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    perimetro = (largoTerreno * 2) + (anchoTerreno * 2);
    total = perimetro * 3;

    alert(`Se necesitara: ${perimetro.toFixed(1)} m por vuelta y un total de: ${total.toFixed(1)} m para las 3 vueltas de alambre.`);
}

function Circulo() {
    // Opción "corta"

    let radioTerreno = parseFloat(document.getElementById("txtIdRadio").value);
    let perimetro = 2 * Math.PI * radioTerreno;
    let alambreTresVueltas = perimetro * 3;

    alert(`Se necesitara: ${perimetro.toFixed(1)} m por vuelta y un total de: ${alambreTresVueltas.toFixed(1)} m para las 3 vueltas de alambre.`);


    // Opción extensa
        // let radioTerreno;
        // let perimetro;
        // let alambreTresVueltas;

        // radioTerreno=document.getElementById("txtIdRadio").value;

        // radioTerreno=parseFloat(radioTerreno);

        // perimetro= 2 * Math.PI * radioTerreno;
        // alambreTresVueltas=perimetro*3;



        // alert("Se necesitara: "  +perimetro.toFixed(1)+ "m por vuelta y un total de: " +alambreTresVueltas.toFixed(1)+"m para las 3 vueltas de alambre.");
}

function Materiales() {

    let largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    let anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);

    let superficie = largoTerreno * anchoTerreno;
    let bolsaCemento = superficie * 2;
    let bolsaCal = superficie * 3;

    alert(`Para la superficie de ${superficie}m2, se necesitaran: ${bolsaCal} bolsas de cal y ${bolsaCemento} de cemento.`);
}