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
let cartaExtra1 = comprarCarta();
let cartaExtra2 = comprarCarta();
let resultado = carta1.valor+carta2.valor
let resultadoUsuario = carta1.valor+carta2.valor+cartaExtra1.valor+cartaExtra2.valor
console.log("Usuário - cartas: ", carta1.texto, " ", carta2.texto, " - ", resultado)

let carta3 = comprarCarta();
let carta4 = comprarCarta();

let cartaExtra3 = comprarCarta();
let cartaExtra4 = comprarCarta();
let resultadoPc = carta3.valor+carta4.valor+cartaExtra3.valor+cartaExtra4.valor

let resultadoComputador = carta3.valor+carta4.valor
console.log("Computador - cartas: ", carta3.texto, " ", carta4.texto, " - ", resultadoComputador)

if(confirm("Suas cartas são " + carta1.texto + " " + carta2.texto + ". " + " A carta revelada do computador é " + carta3.texto + "." + "\n" + "Deseja comprar mais uma carta?")){
   confirm("Suas cartas são " + " " + carta1.texto + " " + carta2.texto + " " + cartaExtra1.texto + ". " + " A carta revelada pelo computador é " + carta3.texto + "." + "\n" + "Deseja comprar mais uma carta?")
} else {
   alert("Suas cartas são "+ " " + carta1.texto + " " + carta2.texto + "." + " Sua pontuação é " + resultado + "." + "\n" + "As cartas do computador são " + carta3.texto + " " + carta4.texto + "." + " A pontuação do computador é " + resultadoComputador)
}


// confirm("Suas cartas são " + " " + carta1.texto + " " + carta2.texto + " " + cartaExtra1.texto + ". " + " A carta revelada pelo computador é " + carta3.texto + "." + "\n" + "Deseja comprar mais uma carta?")
// alert("Suas cartas são " + carta1.texto + " " + carta2.texto + " " + cartaExtra1.texto + " " + cartaExtra2.texto + ". " + " Sua pontuação é " + resultadoUsuario + "." + "\n" + "As cartas do computador são " + carta3.texto + " " + carta4.texto + ". " + " A pontuação do computador é " + resultadoComputador)

if(resultadoUsuario <= 21){
   console.log("O usuário ganhou!")
} else {
   if(resultadoComputador <= 21){
      console.log("O computador ganhou!")
} else {
   if(resultadoUsuario && resultadoComputador <= 21){
      console.log("Empate!")
   }
}
   } 

   
let aUsuario = 0
while (!aUsuario) {
   if(carta1 === A && carta2 === A) aUsuario = 1  
}

let aComputador = 0
while (!aComputador) { 
   if(carta3 === A && carta4 === A) aComputador = 1
}