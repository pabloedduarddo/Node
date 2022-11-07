/**
 * calculo de idade
 */
 
//importar pacotes
 let read = require ('readline-sync')
 let colors = require ('colors')

//variáveis
 console.log("==== calculo da idade ====")
 let nome = read.question("Digite sua idade: ")
 console.log(`idade: ${idade}`)

 //status
 if(idade < 18) {
     console.log("MENOR DE IDADE".red)
 }  else {
     console.log("MAIOR DE IDADE".blue)
 }
