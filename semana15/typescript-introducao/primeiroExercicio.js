//const minhaString: string = 2 //a) dá erro de tipo, tipo número não é atribuível ao tipo string.
var meuNumero = 2; //b) pode trocar usar o tipo any no lugar de number.
var CORES_ARCO_IRIS;
(function (CORES_ARCO_IRIS) {
    CORES_ARCO_IRIS["AZUL"] = "Azul";
    CORES_ARCO_IRIS["VERDE"] = "Verde";
    CORES_ARCO_IRIS["AMARELO"] = "Amarelo";
    CORES_ARCO_IRIS["VERMELHO"] = "Vermelho";
})(CORES_ARCO_IRIS || (CORES_ARCO_IRIS = {}));
var pessoa = {
    nome: "José",
    idade: 10,
    corFavorita: CORES_ARCO_IRIS.AMARELO
};
var pessoa2 = {
    nome: "Joana",
    idade: 20,
    corFavorita: CORES_ARCO_IRIS.AZUL
};
var pessoa3 = {
    nome: "Julia",
    idade: 30,
    corFavorita: CORES_ARCO_IRIS.VERDE
};
var pessoa4 = {
    nome: "Josiel",
    idade: 40,
    corFavorita: CORES_ARCO_IRIS.VERMELHO
};
console.log(pessoa4);
