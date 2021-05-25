Exercício 1

a) VARCHAR recebe uma string, o (n) representa a quantidade de caracteres da string.
PRIMARY KEY é a chave, como se fosse o id.
NOT NULL indica que o campo é de preenchimento obrigatório.
DATE representa uma data.

b) SHOW DATABASES retorna a informação sobre o schema. SHOW TABLES retorna informações sobre as tabelas do schema.

c) DESCRIBE Actor mostra as informações que serão guardadas (id, nome...), o tipo (varchar...), se é null, se tem key.

Exercício 2

a) VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
)

b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Erro de código: 1062. Entrada duplicada '002' para a chave 'PRIMARY'. Isso acontece porque a key deve ser um número único, não pode ter outro igual.
    "002",
    "Gal Gadot",
    5000,
    "1965-02-10",
    "female"

c) Error Code: 1136. Column count doesn't match value count at row 1 / Erro de códig: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1. 
Os valores passados não correspondem ao campo da coluna; a coluna pede id, nome e salário, nos valores são passados também data de nascimento e gênero. Além disso, ao criar a tabela, foi definido que data de nascimento e gênero devem ser preenchidos. Funciona assim:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) Error Code: 1364. Field 'name' doesn't have a default value / Código de erro: 1364. O campo 'nome' não tem um valor padrão.
O nome é de preenchimento obrigatório. É necessário passar ele na coluna e nos valores. Funciona assim:
INSERT INTO Actor (id, salary, birth_date, gender, name)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male",
  "Humberto Carrão"
);

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 / Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
A data precisa estar em formato de string. Funciona:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

EXERCÍCIO 3

a) SELECT id, name, salary, birth_date, gender FROM Actor WHERE gender = "female"
b) SELECT salary FROM Actor WHERE name = "Tony Ramos"
c) SELECT * FROM Actor WHERE gender = "invalid" . 0 row(s) returned/0 linhas retornadas. Não há dados com o gênero "invalid", todos estão preenchidos com male ou female. A tabela retornou com os campos null.
d) SELECT id, name, salary FROM Actor WHERE salary <= 500000
e) Error Code: 1054. Unknown column 'nome' in 'field list' / Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'. A informação passada no select é diferente da que foi passada na coluna. O correto seria "name", não "nome".


