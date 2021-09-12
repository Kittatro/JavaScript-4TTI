function tableMulti()
{
	var x= parseInt(prompt("Nombre dont on veut voir la table jusque 10","Nombre"));
	var i;
	i=0
	while (i<=10)
	{
res = i*x;
alert(i+"x"+x+"="+res);
i++;
	}
}