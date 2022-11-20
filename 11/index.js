//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 2_000_00;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10_000_00;

const parcelaMensal = (18 / 100) * rendaMensalEmCentavos;


if (mesesDecorridos > 60) {
    console.log("Você não deve mais nada, pois independente de ter quitado o curso, após 60 meses a dívida expira.");
} else {
    if (totalJaPagoPeloAluno >= 1800000) {
        console.log("Parabéns, Você já quitou a sua divida. Sucesso!")
    } else {
        if (rendaMensalEmCentavos < 200000) {
            console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
        } else if (rendaMensalEmCentavos < 0) {
            console.log("Erro")
        } else {
            console.log(`O valor da parcela desse mês é de R$ ${(parcelaMensal / 100).toFixed(2)} reais. Ainda restam ser pagos R$ ${((1800000 - totalJaPagoPeloAluno) / 100).toFixed(2)} reais.`);
        }

    }

}
