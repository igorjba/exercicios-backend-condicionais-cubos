const jogada1 = "pedra"
const jogada2 = "papel"

if (jogada1 === jogada2) {
    console.log("empate");
} else {
    if (jogada1 === "pedra") {
        if (jogada2 === "tesoura") {
            console.log("pedra");
        } else {
            console.log("papel");
        }
    } else if (jogada1 === "tesoura") {
        if (jogada2 === "pedra") {
            console.log("pedra");
        } else {
            console.log("tesoura");
        }
    } else {
        //jogada2 === "pedra" ? console.log("papel") : console.log("tesoura");

        if (jogada2 === "pedra") {
            console.log("papel");
        } else {
            console.log("tesoura");
        }
    }
}



// if (jogada1 === jogada2) {
//     console.log("empate");
// } else if (((jogada1 === "pedra") && (jogada2 === "tesoura")) || ((jogada2 === "pedra") && (jogada1 === "tesoura"))) {
//     console.log("pedra");
// } else if (((jogada1 === "pedra") && (jogada2 === "papel")) || ((jogada2 === "pedra") && (jogada1 === "papel"))) {
//     console.log("papel")
// } else if (((jogada1 === "papel") && (jogada2 === "tesoura")) || ((jogada2 === "papel") && (jogada1 === "tesoura"))) {
//     console.log("tesoura")
// }