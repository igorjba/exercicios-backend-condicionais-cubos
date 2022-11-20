const jogada1 = -5;
const jogada2 = 2;
const soma = jogada1 + jogada2;
const resultado = soma % 2; // % -> modulo/resto

if ((jogada1 < 0) || (jogada2 < 0)) {
    console.log("Nem venha que você não consegue fazer número negativo com a mão. ¬¬");
} else if (resultado == 0) {
    console.log("par")
} else {
    console.log("impar")
}