//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];
  numeros.reverse();
  return numeros
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
const numerosParesElevado = [1, 2, 3, 4, 5, 6];
const resultadoNumerosParesElevado = []
   for(numero of array) {
      if(numero % 2 === 0) {
         resultadoNumerosParesElevado.push(numero**2)
       }
   } return resultadoNumerosParesElevado
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   const entradaNumerosPares = [1, 2, 3, 4, 5, 6];
   const numerosPares = []
   for(num of entradaNumerosPares) {
      if(num % 2 === 0) {
      numerosPares.push(num)
      }
   } return numerosPares
} 

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maiorNum = []
   for(let i = 0; i < array.length; i++) {
      if(array[i] > maiorNum) {
         maiorNum = array[i];
      }
   } return maiorNum
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3

   let resultado = []

   let booleanA = booleano1 && booleano2 && !booleano4
      resultado.push(booleanA)
   let booleanB = (booleano1 && booleano2) || !booleano3
      resultado.push(booleanB)
   let booleanC = (booleano2 || booleano3) && (booleano4 || booleano1)
      resultado.push(booleanC)
   let booleanD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
      resultado.push(booleanD)
   let booleanE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
      resultado.push(booleanE)

      return resultado
} 

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   const numPares = []
   for(let i = 0; numPares.length < n; i++) {
      if(i % 2 === 0) {
         numPares.push(i)
      }
   }
   return numPares
} 
retornaNNumerosPares(3)

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if(a === b && b === c){
     return 'Equilátero'
  } else {
     if(a === b && b !== c) {
        return 'Isósceles'
     } else {
        if(a !== b && b !== c) {
           return 'Escaleno'
        }
     }
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   if(num1 > num2) {
      maiorNumero = num1
      menorNumero = num2
   } else if(num1 < num2) {
      maiorNumero = num2
      menorNumero = num1
   } 
   maiorDivisivelporMenor = maiorNumero % menorNumero === 0;  
   const diferenca = maiorNumero - menorNumero;
      return {
         maiorNumero: maiorNumero,
         maiorDivisivelporMenor: maiorDivisivelporMenor,
         diferenca: diferenca
    }
}


// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}


//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filmeFavoritoAstrodev = {
      nome: 'O Diabo Veste Prada',
      ano: Number(2006),
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filmeFavoritoAstrodev
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   const retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
   return retangulo

}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   pessoa.nome = 'ANÔNIMO'
   return pessoa
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   const soMaiores = arrayDePessoas.filter((arrayDePessoas) => {
      if(arrayDePessoas.idade >= 20){
         return arrayDePessoas.idade >= 20
      }
     })
     return soMaiores
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   const soMenores = arrayDePessoas.filter((arrayDePessoas) => {
      if(arrayDePessoas.idade < 20){
         return arrayDePessoas.idade < 20
      }
     })
     return soMenores
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}