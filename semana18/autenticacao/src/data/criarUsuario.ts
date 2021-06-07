import knex from "knex";

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
    },
});

const userTableName = "Usuários";

const criarUsuario = async (
	id: string, 
	email: string, 
	password: string) : Promise <void> => {
	await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};

export default criarUsuario