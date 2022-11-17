/**
 * Game Jokenpo
 */
//importar pacote
 const read = require ('readline-sync')

console.log("_________JoKenPô_________")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
console.log("")
//LÓGICA DO JOGADOR
let jogador = Number (read.question("Digite a opcao desejada: "))
switch (jogador) {
    case 1:
        console.log("Jogador escolheu: PEDRA")
        break
    case 2:
        console.log("Jogador escolheu: PAPEL")
        break
    case 3:
        console.log("Jogador escolheu: TESOURA")
        break
        default:
            console.log("Opcao invalida")
            break
}

//lógica do computador (SORTEIO)
let computador = Math.floor(Math.random() * 3 + 1) //0 1 2
console.log(computador)
switch(computador) {
    case 1:
        console.log("Computador escolheu: PEDRA")
        break
    case 2:
         console.log("Computador escolheu: PAPEL")
         break
    case 3:
        console.log("Computador escolheu: TESOURA")
            break
            default:
                console.log("Opcao invalida")
                break       
}
//lógica de vencedor ou empate
if (jogador == computador) {
    console.log("EMPATE")

} else if ((jogador == 1 && computador == 3) || (jogador == 2 && computador == 1) || (jogador == 3 && computador == 2)){

  console.log("Jogador VENCEU")
} else {
    console.log("Computador VENCEU")
}
