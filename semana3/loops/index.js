// Exercicio 1
// É lido todos os números menores que 5. No console aparece as 5 repetições. 

// Exercicio 2
// a. Aparecerão todos os números maiores que 18. 
// b. Sim, tiraria: if (numero > 18)

// Exercicio 3

// a.
// const arrayOriginal = [20, 30, 50, 80, 10]
// for (let numero of arrayOriginal) {
// console.log(numero)
// }

// b.
// const arrayOriginal = [20, 30, 50, 80, 10]
// let divisao = 10
// for(let divisao of arrayOriginal){
//   console.log(divisao/10)
// }

// c.
// const arrayOriginal = [20, 30, 50, 80, 10, 25, 45]
// let numerosPares = []
// for(let i = 0; i < arrayOriginal.length; i++) {
//   if(arrayOriginal[i] %2 === 0) {
//     numerosPares.push(arrayOriginal[i])
//   }
//   // console.log("index/posição do elemento no array", i)
//   // console.log("elementos do array", arrayOriginal[i])
// }
// console.log(numerosPares)

// d. 
const arrayOriginal = [20, 30, 50, 80, 10]
for(let i = 0; i < arrayOriginal.length; i++) {
  if(arrayOriginal[i] %2 === 0) 
  console.log("index/posição do elemento no array", i)
  console.log("elementos do array", arrayOriginal[i])
}
// Não consegui pôr esse em uma única linha.