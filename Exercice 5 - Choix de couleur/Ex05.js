// JavaScript Document
var array1=["fond","getElementById","bgColor","texte","innerHTML","Vous avez cliqué sur le bouton ''","''.","Red","Green","Blue"];
function maj(ev)
{
var colour;
var text;
colour= document[array1[1]](array1[0]);
colour[array1[2]]= ev;text= document[array1[1]](array1[3]);
text[array1[4]]= array1[5]+ ev+ array1[6];
console.log("Couleur modifiée.",colour);
console.log("Texte modifié.",text);
console.log("Le bouton pressé est le bouton",ev,".");
}
function rouge()
{
	maj(array1[7])
}
function vert()
{
	maj(array1[8])
}
function bleu()
{
	maj(array1[9])
}
function testTableau()
{
	console.log(array1);
}