function calcular() {
	var raio= document.getElementById("raio").value;
	
	if(raio > 0)
	{
	var resultado=  3.14 * ((raio) ** 2);
	alert("A area do circulo e de:" + resultado);
	}
	else
	{
		alert("Digite os valores primeiro!!");
	}
}