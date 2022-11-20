const ladoA = 2;
const ladoB = -1;

if ((ladoA < 0) || (ladoB < 0)) {
    console.log("Não existe número negativo no dominó, espertão.");
} else if (ladoA === ladoB) {
    console.log("SIM");
} else {
    console.log("NÃO");
}