const caractere = "E";

const vogaisMaiusculas = ["A", "E", "I", "O", "U", "Y"];
const vogaisMinusculas = ["a", "e", "i", "o", "u", "y"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const consoantesMaiusculas = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "W", "Z"];
const consoantesminusculas = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "w", "z"];

for (let vogalMaiuscula of vogaisMaiusculas) {
    if (vogalMaiuscula === caractere) {
        console.log("Vogal maiúscula");
    }
}
for (let vogalMinuscula of vogaisMinusculas) {
    if (vogalMinuscula === caractere) {
        console.log("Vogal minúscula");
    }
}
for (let numero of numeros) {
    if (numero == caractere) {
        console.log("Número");
    }
}
for (let consoanteMaiuscula of consoantesMaiusculas) {
    if (consoanteMaiuscula === caractere) {
        console.log("Consoante maiúscula");
    }
}
for (let consoanteMinuscula of consoantesminusculas) {
    if (consoanteMinuscula === caractere) {
        console.log("Consoante maiúscula");
    }
}