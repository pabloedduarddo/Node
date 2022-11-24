let read = require("readline-sync")

 let produto = Number(read.question("valor do produto? "))
 let imposto = ((produto * 0.3)
 let final = (produto + imposto)
 
 console.log(`o valor do produto é: ${produto.toFixed(2)}`)
 console.log(`o valor do imposto é: ${produto.toFixed(2)}`)
 console.log(`o valor do produto com imposto é: ${final.toFixed(2)}`)