function mostrar() 
{
    let numPri = prompt("Ingrese el primer número: ");//sin parsear
    let numSeg = prompt("Ingrese el segundo número: ");//sin parsear

    let primerNum = parseInt(numPri);//con parseo
    let segundoNum = parseInt(numSeg);//con parseo

    if (primerNum == segundoNum)              //si primer y segundo num coinciden
    {
        alert(numPri + numSeg);               //se muestra concatenados (juntos)
    }
    else if (primerNum > segundoNum)           //si el primer numero es mayor que el segundo
    {
        alert(primerNum - segundoNum);        //se restara y mostrará resultado
    }
    else                                              //si el primer NO es mayor al segundo numero, se sumara 
    {
        let resultado = primerNum + segundoNum;      //guardo el resultado de la suma en otra variable y dependiendo:

        if (resultado > 10)                                       //si la suma da más o no de 10, se mostraran los sig msj:
        {
            alert(`la suma es ${resultado} y supero el 10.`);     //si supera los "10"
        }
        else                                                      
        {
            alert(`El resultado es ${resultado}`);               //si no supera los "10"
        }
    }
}
