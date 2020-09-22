function calcular() {
	var peso= document.getElementById("peso").value;
	var altura= document.getElementById("altura").value;
	
	if(peso > 0 && altura >0)
	{
	var resultado= (peso) / ((altura) ** 2);
	alert("Seu IMC e de:" + resultado);
	}
	else
	{
		alert("Digite os valores primeiro!!");
	}
}