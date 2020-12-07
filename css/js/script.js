// ● Gioco dei dadi, chi fa di più vince.
// Generare un numero random da 1 a 6, sia per il
// giocatore sia per il compute. Stabilire il
// vincitore, in base a chi fa il punteggio più alto.

let getRndNumber = () => Math.floor((Math.random() * 6) + 1);

const playerOne = getRndNumber();
const playerTwo = getRndNumber();

console.log(playerOne);
console.log(playerTwo);

if (playerOne == playerTwo) {
    console.log("PAREGGIO");
} else if (playerOne > playerTwo) {
    console.log("Giocatore UUUNOOOO, VINCEEE");
} else {
    console.log("Giocatore DDDUEEE, VINCEEE");
}
