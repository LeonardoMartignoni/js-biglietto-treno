// Traccia
// 
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// Va applicato uno sconto del 20 % per i minorenni.
// Va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Passaggi
// 
// Chiedo all'utente quanti km dovrà percorrere
let runnedKm = parseInt(prompt('Quanti km dovrai percorrere?'));
console.log('Km number ' + runnedKm);

// Chiedo all'utente l'età
let userAge = parseInt(prompt('Quanti anni hai?'));
console.log('User Age ' + userAge);

// Imposto il prezzo del biglietto per km (0.21€)
const ticketPricePerKm = 0.21;
let ticketPrice = 0;

// Se l'età del passeggero è minore a 18
if (userAge < 18) {
    ticketPrice = runnedKm * ticketPricePerKm;
    // Applica uno sconto del 20%
    const discountPerc = (ticketPrice / 100) * 20;
    ticketPrice = ticketPrice - discountPerc;
    console.log('Ticket final price (under 18) ' + ticketPrice.toFixed(2));
}

// Altrimenti se l'età del passeggero è maggiore di 65
else if (userAge >= 65) {
    ticketPrice = runnedKm * ticketPricePerKm;
    // Applica uno sconto del 40%
    const discountPerc = (ticketPrice / 100) * 40;
    ticketPrice = ticketPrice - discountPerc;
    console.log('Ticket final price (over 65) ' + ticketPrice.toFixed(2));
}

else {
    ticketPrice = runnedKm * ticketPricePerKm;
    // Altrimenti non applicare nessuno sconto
    console.log('Ticket final price (no discounts) ' + ticketPrice.toFixed(2));
}

// Stampo il prezzo finale che va messo con massimo due decimali