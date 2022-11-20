//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

const descontoCredito = valorDoProduto * (5 / 100);
const descontoCheque = valorDoProduto * (3 / 100);
const descontoAVista = valorDoProduto * (10 / 100);

const valorFinalCredito = (valorDoProduto - descontoCredito).toFixed(2);
const valorFinalCheque = (valorDoProduto - descontoCheque).toFixed(2);
const valorFinalAVista = (valorDoProduto - descontoAVista).toFixed(2);

if (tipoDePagamento === "credito") {
    console.log(`Valor a ser pago: R$${valorFinalCredito}`);
} else if (tipoDePagamento === "cheque") {
    console.log(`Valor a ser pago: R$${valorFinalCheque}`);
} else if ((tipoDePagamento === "dinheiro") || (tipoDePagamento === "debito")) {
    console.log(`Valor a ser pago: R$${valorFinalCheque}`);
} else {
    console.log("Erro")
}