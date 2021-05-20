//const minhaString: string = 2 //a) dá erro de tipo, tipo número não é atribuível ao tipo string.
const meuNumero: number = 2 //b) pode trocar usar o tipo any no lugar de number.

enum CORES_ARCO_IRIS {
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    VERMELHO = "Vermelho"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS
}
const pessoa: Pessoa = {
    nome: "José",
    idade: 10,
    corFavorita: CORES_ARCO_IRIS.AMARELO
}
const pessoa2: Pessoa = {
    nome: "Joana",
    idade: 20,
    corFavorita: CORES_ARCO_IRIS.AZUL
}
const pessoa3: Pessoa = {
    nome: "Julia",
    idade: 30,
    corFavorita: CORES_ARCO_IRIS.VERDE
}
const pessoa4: Pessoa = {
    nome: "Josiel",
    idade: 40,
    corFavorita: CORES_ARCO_IRIS.VERMELHO
}
console.log(pessoa4)