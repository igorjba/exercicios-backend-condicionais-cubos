const primeiroNome = "Mario";
const sobrenome = "Bross";
const apelido = "Marião";

if (apelido) {
    console.log(apelido);
} else if ((primeiroNome) && (sobrenome)) {
    console.log(`${primeiroNome} ${sobrenome}`);
} else if (primeiroNome) {
    console.log(primeiroNome);
} else if ((sobrenome) || (" ")) {
    console.log("Nome ou apelido são obrigatórios");
}