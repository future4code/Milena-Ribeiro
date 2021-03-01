// Exercicio 1
// a. 10 - 50
// b. Não apareceria nada porque o return não imprime, quem imprime na tela é o console.log

// Exercicio 2 
// a. Darvas, Caio, João
// b. Amanda, Caio

// Exercicio 3
// No array final são adicionados o resultado dos números pares multuplicados por eles mesmos. Numeros, numerosPares.

// Exercicio 4
function sobreMim(){
    console.log("Eu sou Milena, tenho 22 anos, moro em Jacobina e sou estudante.")
}
sobreMim()

let amiga = (nome, idade, endereco, estudante) => {
    nome = "Uana"
    idade = 22
    endereco = "Rua das Laranjeiras"
    estudante = true
    if (estudante === true) {
        console.log('Eu sou ' + nome + ', tenho ' + idade + ' anos, moro na ' + endereco + ' e sou estudante.')
    }
}
amiga()