// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.

// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
function generaRandom(min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
}

function generaArrayMine() {
    var numeri = [];
    while(numeri.length < 16){
        var r = generaRandom(1, 100);
        if(numeri.indexOf(r) === -1) numeri.push(r);
    }
    return numeri;
}

var giocata_pc = generaArrayMine();
console.log(giocata_pc);



// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
var num = [];
do {
    var giocata_utente = parseInt(prompt('inserisci un numero tra 1 e 100');
    num.push(giocata_utente);

    if (num == giocata_pc) {
        console.log('Hai perso, hai preso una mina: le tue giocate sono state ' + (giocata_pc - giocata_utente) );
    }
} while(isNaN(giocata_utente) || giocata_utente < 1 || giocata_utente > 100 || num.length > 84);

if (isNaN(giocata_utente) || giocata_utente < 1 || giocata_utente > 100 || num.length > 84) {
    console.log('Hai barato, ricarica la pagina e gioca ancora.');
} else {
    console.log('Complimenti! sei riuscito a battere il Computer e a sviare tutte le mine.');
}


// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).


// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti (84!)



// Al termine della partita il software deve comunicare all'utente quante giocate ha fatto prima di perdere.
