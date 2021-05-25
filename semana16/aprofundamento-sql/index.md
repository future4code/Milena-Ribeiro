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

d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0. Não apontou um erro mas não alterou nada porque não existe id 010.

EXERCÍCIO 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro Gomes"
b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

Exercício 4

a) SELECT MAX(salary) FROM Actor;
b) SELECT MIN(salary) FROM Actor WHERE gender = "female";
c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
d) SELECT SUM(salary) FROM Actor;

Exercício 5