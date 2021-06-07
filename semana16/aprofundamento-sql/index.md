EXERCÍCIO 1

a) Remove a coluna salary da tabela actor. 
b) Redeclara o nome da coluna. Deixe de ser nomeada gender, passa a ter o nome sex e o limite de caracteres é 6 e aceita qualquer string.
c) A coluna passa a ter o nome gender e o limite de caracteres é 255.
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

EXERCÍCIO 2

a) UPDATE Actor
SET name = "Fernanda Montenegro Gomes", birth_date = "1965-03-29"
WHERE id = "003"

b) UPDATE Actor
SET name = "JULIANA PAES" 
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes" 
WHERE name = "JULIANA PAES";

c) UPDATE Actor 
SET name = "Juliana Paes Gomes", salary = 50000, birth_date = "1980-12-12", gender = "female"
WHERE id = "005";

d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 / 0 linha (s) afetada (s) Linhas correspondidas: 0 Alterado: 0 Avisos: 0
Não apontou um erro mas não alterou nada porque não existe id 010.

EXERCÍCIO 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro Gomes"
b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

Exercício 4

a) SELECT MAX(salary) FROM Actor;
b) SELECT MIN(salary) FROM Actor WHERE gender = "female";
c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
d) SELECT SUM(salary) FROM Actor;

Exercício 5

a) Retorna duas colunas, count e gender. Count indica a quantidade de pessoas de determinado gênero (gender)
b) SELECT id, name FROM Actor ORDER BY name DESC
c) SELECT name, salary FROM Actor ORDER BY salary ASC
d) SELECT name, salary FROM Actor ORDER BY salary DESC LIMIT 3
e) SELECT AVG(salary) FROM Actor WHERE gender = "male"; 
SELECT AVG(salary) FROM Actor WHERE gender = "female";

Exercício 6 

a) ALTER TABLE Movie
ADD playing_limit_date VARCHAR (255);
b) ALTER TABLE Movie
CHANGE rating rating FLOAT;
C) UPDATE Movie 
SET playing_limit_date = "2021-12-12"
WHERE id = "003";
UPDATE Movie 
SET playing_limit_date = "2015-12-12"
WHERE id = "002";
d) DELETE FROM Movie WHERE id = "004"; 
UPDATE Movie 
SET synopsis = "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo."
WHERE id = "004";
Não apontou um erro mas não alterou nada porque o id 004 foi deletado.