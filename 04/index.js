const ladoA = 1;
const ladoB = 1;

if ((ladoA < 0) || (ladoB < 0)) {
    console.log("Ainda não existe número negativo no dominó, espertão.");
} else if ((ladoA === ladoB) && (ladoA === 0)) {
    console.log("Bucha de branco");
} else if ((ladoA === ladoB) && (ladoA === 1)) {
    console.log("Bucha de ás");
} else if ((ladoA === ladoB) && (ladoA === 2)) {
    console.log("Bucha de duque");
} else if ((ladoA === ladoB) && (ladoA === 3)) {
    console.log("Bucha de terno");
} else if ((ladoA === ladoB) && (ladoA === 4)) {
    console.log("Bucha de quadra");
} else if ((ladoA === ladoB) && (ladoA === 5)) {
    console.log("Bucha de quina");
} else if ((ladoA === ladoB) && (ladoA === 6)) {
    console.log("Bucha de sena");
} else {
    console.log("Não é bucha");
}