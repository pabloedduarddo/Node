/**
 * APP - Custo x Vendas
 */

//importar pacotes
const read = require('readline-sync')
const colors = require('colors')

console.log("=========== Custo x Vendas ==========")

//variáveis
let custo = Number(read.question("Preço de Custo: ").replace(",","."))
let lucro = Number(read.question("Margem de Lucro(%): ").replace(",","."))

//processamento
let venda = custo +((lucro * custo)/100)

//saída
console.log(`Venda: R$ ${venda}`)
