# Exercício 1

a) FOREIGN KEY (chave estrangeira) é o campo de uma tabela reservado para uma PRIMARY KEY. A chave estrangeira é como se fosse a chave filha e a PRIMARY KEY é a chave referenciada.

b)INSERT INTO Rating VALUES (
"okm", 
"O Filme é bom, o resultado a bilheteria nacional comprova.",
9,
"001"
);
INSERT INTO Rating VALUES (
"ojy", 
"Verdade seja dita, em seu primeiro episódio Doce de Mãe não primou pela originalidade.",
6,
"002"
);
INSERT INTO Rating VALUES (
"fjl", 
"Dona Flor e Seus Dois Maridos faz o que o cinema faz de melhor: usa fantasia para enxergar a realidade.",
8,
"003"
);

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails(FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)) / Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movie` (` id`))
Não existe o id na tabela mãe (Movie), o id referenciado (Rating) precisa existir na Movie.

d) ALTER TABLE Movie DROP COLUMN rating;

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)) / Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha. 
Pra conseguir apagar um filme é preciso excluir as linhas referenciadas. Não pode apagar um filme porque há uma linha na tabela rating, o id, que é filha da tabela movie.

# Exercício 2

a) movie_id pega o id da tabela movie, actor_id pega o id da tabela actor, sendo o id uma string. movie_id é a chave estrangeira.

b) INSERT INTO MovieCast VALUES (
	"001",
    "001"
), (
	"001",
    "002"
);
INSERT INTO MovieCast (movie_id, actor_id) VALUES (
	"002",
    "004"
), (
	"002",
    "006"
), (
	"003",
    "005"
), (
	"003",
    "007"
); 

c) INSERT INTO MovieCast VALUES (
	"009", => não existe filme com id 009 na tabela Movie, por isso não pode ser adicionado na MovieCast
    "001"
);
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha. 

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Pra conseguir apagar um ator é preciso excluir as linhas onde ele foi referenciado. Não pode apagar um ator porque há uma linha na tabela MovieCast, o id, que é filha da tabela Actor.

# Exercício 3

a) Foi selecionado tudo da tabela Movie. Há uma junção da tabela Rating com a tabela Movie através do INNER JOIN. O ON é uma keyword que representa uma condição. O que a query quer é que a coluna id da tabela Movie seja equivalente a coluna movie_id da tabela Rating. O ON faz referência a duas colunas.
b) SELECT Movie.id, rate as rating, title FROM Movie INNER JOIN Rating ON Movie.id = Rating.movie_id;

