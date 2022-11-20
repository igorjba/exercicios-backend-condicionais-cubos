const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;
const meia = 10;
const inteira = 20;

if ((idade > 65 || idade < 12) || (possuiPatologia === true) || (altura < 150)) {
    console.log("ACESSO NEGADO");
} else {
    if ((ehEstudante === true) || (idade < 18)) {
        console.log(`${meia} reais`);
    } else {
        console.log(`${inteira} reais`);
    }
}