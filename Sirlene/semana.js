let read = require("readline-sync") 
  
 let idade = Number(read.question("Qual sua idade?")) 
 let semana = (idade *52.177)  
  
 console.log(`${idade} anos é igual a ${semana.toFixed(2)} semanas `)
