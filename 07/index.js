const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2700000; //emCentavos



if (aposentada === true) {
    console.log("ISENTA");
} else {
    if (portadoraDeDoenca === true) {
        console.log("ISENTA");
    } else {
        if (totalDeRendimentos > 2855970) {
            console.log("PEGA LEAO");
        } else {
            console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
        }
    }
}