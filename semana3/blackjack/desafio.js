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
} else {
   console.log("O jogo acabou.")
}

let carta1 = comprarCarta();
let carta2 = comprarCarta();
let resultado = carta1.valor+carta2.valor
console.log("Usuário - cartas: ", carta1.texto, " ",carta2.texto, " - ", resultado)

if(carta1.texto === comprarCarta && carta2.texto === comprarCarta){
   console.log(location.reload)
}

// if(carta1 === A && carta2 === A){
//    console.log(location.reload)
// }

let carta3 = comprarCarta();
let carta4 = comprarCarta();
let resultadoComputador = carta3.valor+carta4.valor
console.log("Computador - cartas: ", carta3.texto, " ", carta4.texto, " - ", resultadoComputador)
