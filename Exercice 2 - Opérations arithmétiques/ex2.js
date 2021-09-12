function opArithmetiques()
{
var x= parseInt(prompt("Premier nombre de l'opération","Nombre"));
var y= parseInt(prompt("Second nombre de l'opération","Nombre"));
var op= parseInt(prompt("Opération à réaliser","Nombre"));
if (op<=1) (res = x+y);
else
if (op<=2) (res = x-y);
else
if (op<=3) (res = x*y);
else
(res = x/y)
alert(res)
}