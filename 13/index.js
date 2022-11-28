//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorComDesconto = 0;

if (tipoDePagamento === "credito") {
    valorComDesconto = valorDoProduto * 95 / 100;
} else if (tipoDePagamento === "cheque") {
    valorComDesconto = valorDoProduto * 97 / 100;
} else {
    valorComDesconto = valorDoProduto * 90 / 100;
}

console.log(`Valor a ser pago: R$${(valorComDesconto / 100).toFixed(2)}`);

// const descontoCredito = valorDoProduto * (5 / 100);
// const descontoCheque = valorDoProduto * (3 / 100);
// const descontoAVista = valorDoProduto * (10 / 100);

// const valorFinalCredito = (valorDoProduto - descontoCredito).toFixed(2);
// const valorFinalCheque = (valorDoProduto - descontoCheque).toFixed(2);
// const valorFinalAVista = (valorDoProduto - descontoAVista).toFixed(2);

// if (tipoDePagamento === "credito") {
//     console.log(`Valor a ser pago: R$${(valorFinalCredito / 100).toFixed(2)}`);
// } else if (tipoDePagamento === "cheque") {
//     console.log(`Valor a ser pago: R$${(valorFinalCheque / 100).toFixed(2)}`);
// } else if ((tipoDePagamento === "dinheiro") || (tipoDePagamento === "debito")) {
//     console.log(`Valor a ser pago: R$${(valorFinalCheque / 100).toFixed(2)}`);
// } else {
//     console.log("Erro")
// }