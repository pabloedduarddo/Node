let read = require('readline-sync')

 let real = Number(read.question("dolar em real"))
 let dolar = (real * 5.36)

 console.log(`${real} Dolar em real ${dolar.toFixed(2)}`)