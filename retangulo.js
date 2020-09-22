function calcular() {
	var base= document.getElementById("base").value;
	var haltura= document.getElementById("haltura").value;
	
	if(base > 0 && haltura >0)
	{
	var resultado= (base) * (haltura);
	alert("A area do retangulo e de:" + resultado);
	}
	else
	{
		alert("Digite os valores primeiro!!");
	}
}