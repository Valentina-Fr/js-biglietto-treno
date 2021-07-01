/* 
Ottenere dall'utente numero di chilometri che vuole percorrere 
Ottenere età dell'utente.
Moltiplicare km per 0.21
Calcolare percentuale sconto
Applicare sconti
Mostra output in due decimali
*/

//Dichiarazioni e assegnazioni
var km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
var age = parseInt(prompt('Qual è la tua età?'));
var price = km * 0.21;
var discount20 = price * 20 / 100;
var discount40 = price * 40 / 100;
var result = document.getElementById('result');
var message = 'Il prezzo finale è euro: ';

console.log('km: ', km);
console.log('age: ', age);
console.log('price: ', price);
console.log('sconto 20%: ', discount20);
console.log('sconto 40%: ', discount40);
console.log('elemento html: ', result);
console.log(message);