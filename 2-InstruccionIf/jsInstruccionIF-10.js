/*

Nicole A. Muller
ej 10 IF

*/

function mostrar()
{
	let notaRandom;

	notaRandom = (Math.random() * (11 - 0)).toFixed();


	if (notaRandom == 9 || notaRandom == 10)
	{
		alert(`Su nota es: ${notaRandom}, EXCELENTE.`);
	}
	else 
	{
		if (notaRandom >= 4 && notaRandom <= 8)
		{
			alert(`Su nota es: ${notaRandom}, APROBÓ.`);
		}
		else
		{
			if (notaRandom < 4)
			{
				alert(`Su nota es: ${notaRandom}. Vamos, la proxima se puede.`);
			}
		}
	}
}