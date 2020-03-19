// calcolo biglietto del treno con relativi sconti diversi per le categorie che ci rientrano
// ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km),
// ma va applicato uno sconto del 20% per i minorenni
// e del 40% per gli over 65.

// dichiarazione variabili
var km, numeroKM, eta, prezzo;

// costo per singolo chilometro di percorrenza
km=0.21;

// chiedo all'utente di inserire il numero di km che vuole percorrere e la sua età
numeroKM = prompt('Inserisci il numero di km che vuoi percorrere');
eta = prompt('inserisci la tua età');

// inserisco le condizioni per il calcolo corretto del prezzo dei biglietti
if (eta<18){
  //sconto del 20% perché restituisco l'80% del prezzo del biglietto
  prezzo = (((km * numeroKM)/5)*4);
} else if (eta>65){
  //sconto del 40% perché restituisco il 60% del prezzo del biglietto
  prezzo = (((km * numeroKM)/5)*3);
} else {
  prezzo = km*numeroKM;
}

// modifico il file html di partenza per mostrare il prezzo del biglietto
document.getElementById('prezzoBiglietto').innerHTML = 'Il prezzo del tuo biglietto (comprensivo di sconto se applicabile) è: ' + prezzo.toFixed(2) + '€'; //toFixed arrotonda il numero con una precisione di 2 cifre dopo la virgola

// debug
console.log(numeroKM);
console.log(eta);
console.log(prezzo);
