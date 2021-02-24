// console.log("Hello World")
// Exercicio 1
// a. false
// b. false
// c. true
// e. string

// Exercicio 2
// a. undefined
// b. null
// c. 11
// d. 0
// e. 19
// f. 25

// Exercicio 1
let idadeDoUsuario = prompt("Quantos anos você tem?")
console.log(idadeDoUsuario)
const idadeDaMelhorAmiga = prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga?")
console.log(idadeDaMelhorAmiga)
console.log("Sua idade é maior do que a do seu melhor amigo? " + (idadeDoUsuario > idadeDaMelhorAmiga))
let idadeDoUsuarioDiferenca= 22
let idadeDaMelhorAmigaDiferenca= 18
let resultado = idadeDoUsuarioDiferenca - idadeDaMelhorAmigaDiferenca
console.log(resultado)

// Exercicio 2
let numeroPar = prompt("Insira aqui um número par.")
let converter = Number (numeroPar)%2
console.log(converter)
console.log(numeroPar)
// c. O resto da divisão sempre dá zero.
// d. Se o usuário insere um número ímpar, o resto da divisão dá 1.

// Exercicio 3
let listaDeTarefas = []
listaDeTarefas[0] = prompt("Cite três tarefas que você precisa realizar hoje - 1")
listaDeTarefas[1] = prompt("Cite três tarefas que você precisa realizar hoje - 2")
listaDeTarefas[2] = prompt("Cite três tarefas que você precisa realizar hoje - 3")
console.log(listaDeTarefas)
let tarefasRealizadas = prompt("Digite o índice de uma tarefa que você já realizou")
tarefasRealizadas = Number (tarefasRealizadas)
listaDeTarefas.splice(1, 2)
console.log(listaDeTarefas)
// listaDeTarefas.push(TarefasUsuario)

// Exercicio 4
let nome = prompt("Digite seu nome.")
let emailDoUsuario = prompt("Digite seu email.")
console.log("O email " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome + "!")