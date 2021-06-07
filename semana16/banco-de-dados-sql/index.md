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

EXERCÍCIO 4

a) A query seleciona todas as informações da tabela, mas busca os valores de name que começem com A ou J (a % no final indica a letra inicial da palavra) e que tenham o salário acima de 700.000. Os parênteses indicam a prioridade de execução. Nesse caso a busca é feita primeiro pela letra, depois pelo salário.
b) SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000
c) SELECT * FROM Actor WHERE name LIKE "%g%" or "%G%"
d) SELECT * FROM Actor WHERE (name LIKE "%a%" OR "%A%" OR "%G%" OR "%g%") AND salary BETWEEN 350000 AND 900000;

EXERCÍCIO 5

a) CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY, / É a chave
    title VARCHAR(255) NOT NULL, / Recebe uma string
    synopsis TEXT, / O tipo TEXT não limita o tamanho e espera que seja um texto mais longo
    release_Date DATE NOT NULL, / Recebe a data
    rating INT / Recebe um número inteiro
);
b) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES (
	"001", 
  "Se Eu Fosse Você", 
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
c, d, e) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
), (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
    "2017-11-02",
    8
), (
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
)

EXERCÍCIO 6

a) SELECT id, title, rating FROM Movie WHERE id = '002';
b) SELECT * FROM Movie WHERE title = "Se eu fosse você"
c) SELECT id, title, synopsis FROM Movie WHERE rating >= 7

EXERCÍCIO 7

a) SELECT * FROM Movie WHERE title LIKE "%vida%"
b) SELECT * FROM Movie WHERE title OR synopsis LIKE "%Deus%"
c) SELECT * FROM Movie WHERE release_Date < "2021-05-25"
d) SELECT * FROM Movie WHERE release_Date < "2021-05-25" AND title OR synopsis LIKE "%Deus%" AND rating > 7