//valor do produto comprado.
const valorDoProduto = 1_000_00;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 100_00;

const valorRestante = valorDoProduto - valorPago; // 700_00 
const valorDasParcelas = valorDoProduto / quantidadeDoParcelamento; //100_00
const quantidadeDeParcelasRestantes = valorRestante / valorDasParcelas;

//valor do produto divido pela quantidade de parcelas, acho 100. = valorDasParcelas
//Subtraio do valor do produto o valor pago. = valorRestante
//divido pelo resultado da divisão entre valor do produto e quantidade de parcelas.

console.log(`Restam ${quantidadeDeParcelasRestantes} parcelas de R$${(valorDasParcelas / 100).toFixed(2)}`);