// Exercicio 1
// Ele testa se o número é par ou ímpar a partir do resto da divisão. 
// Se o resultado for igual a 0, é par e imprime no console "Passou no teste".
// Se for diferente de 0, a mensagem do console é "Não passou no teste".
// Exercicio 2
// a. Para consultar o preço das frutas frutas disponíveis ou de outros produtos, o preço será 5.
// b. O preço da fruta Maçã é R$ 2.25
// c. A mensagem seria o preço da pêra e do default.
// Exercicio 3
// a. Convertendo uma string para number e pedindo ao usuário que Digite o primeiro número.
// b. Esse número passou no teste. Daria algum erro ou não apareceria nada.
// c. Sim porque console.log(mensagem) está fora do bloco da variáel.

// Exercicio 4
let dirigir = Number(prompt("Quantos anos você tem?"))
console.log(typeof dirigir)
if(dirigir >= 18) {
    console.log("Você pode dirigir")
} else if(dirigir < 18) {
    console.log("Você não pode dirigir.")
} else {
    console.log("Verifique se você inseriu a idade corretamente.")
}

// Exercicio 5
const turno = prompt("Digite a letra que diz em qual turno você estuda: M - matutino. V - vespertino. N - noturno.")
if(turno === "M") {
    console.log("Bom Dia!")
} else if(turno === "V") {
    console.log("Boa Tarde!")
} else if(turno === "N") {
    console.log("Boa Noite!")
} else {
    console.log("Insira uma letra válida.")
}

// Exercicio 6
let turno = prompt("Digite a letra que diz em qual turno você estuda: M - matutino. V - vespertino. N - noturno.")
switch (turno) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Insira uma letra válida.")
        break
}

// Exercicio 7
let filmeGenero = prompt("Qual o gênero de filme que você deseja ver hoje?")
let ingresso = prompt("Até quanto você deseja pagar?")
if(filmeGenero === "Fantasia") {
    console.log("Filmes de hoje.")
} if(ingresso < 15) {
    console.log("Bom filme!")
} else if(ingresso > 15) {
    console.log("Escolha outro filme :(")
} 

// Desafio 1
let filmeGenero = prompt("Qual o gênero de filme que você deseja ver hoje?")
let ingresso = prompt("Até quanto você deseja pagar?")
let snack = prompt("Qual snack você quer comprar?")

if(filmeGenero === "Fantasia") {
    console.log("Fantasia")
} if(ingresso < 15 + snack) {
    console.log("Bom filme..." + " com " + snack)
} 

// Desafio 2
// console.log("---Dados da compra---")
// let nome = prompt("Digite seu nome completo.")
// console.log("Nome do cliente: " + nome)
// let tipo = prompt("Escola o tipo de jogo: IN DO")
// console.log("Tipo do jogo: " + tipo)
// let etapa = prompt("Escolha a etapa do jogo: SF DT FI")
// console.log("Etapa do jogo: " + etapa)
// let categoria = prompt("Escolha uma categoria: 1 2 3 4")
// console.log("Categoria: " + categoria)
// let ingressos = prompt("Quantos ingressos você deseja comprar?")
// console.log("Quantidade de Ingressos: " + ingressos)
// console.log("---Valores---")
// let valorDoIngresso = 

