/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
   location.reload
   // return
   // console.log("O jogo acabou")
} else {
   console.log("O jogo acabou.")
}

let carta = comprarCarta();
let carta2 = comprarCarta();
// console.log(carta2.valor)

// console.log(carta2.texto)
// console.log(carta.texto)

// console.log(carta.valor)
let resultado = carta.valor+carta2.valor
// console.log(resultado)
console.log("Usuário - cartas: ", carta.texto, " ",carta2.texto, " - ", resultado)

let carta3 = comprarCarta();
let carta4 = comprarCarta();
let resultadoComputador = carta3.valor+carta4.valor
console.log("Computador - cartas: ", carta3.texto, " ", carta4.texto, " - ", resultadoComputador)

if(resultado > resultadoComputador){
   console.log("O usuário ganhou!")
} else {
   if(resultado < resultadoComputador){
      console.log("O computador ganhou!")
} else {
   if(resultado === resultadoComputador){
      console.log("Empate!")
   }
}
   }  

