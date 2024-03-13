function calculandoRank(vitorias, derrotas){
    let resultado = vitorias - derrotas 
    return resultado
}

function rank(){
    let partidas = calculandoRank(60, 15)
    let nivel = ""

    if (partidas < 10) {
        nivel = "Ferro";
    }else if (partidas < 20) {
        nivel = "Bronze";
    } else if (partidas < 50) {
        nivel = "Prata";
    } else if (partidas < 80) {
        nivel = "Ouro";
    } else if (partidas < 90) {
        nivel = "Diamante";
    } else if (partidas < 100) {
        nivel = "Lendário";
    } else if (partidas >= 101) {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${partidas} e está no nível de ${nivel}` 
}
    console.log(rank())