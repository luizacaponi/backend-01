import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(

    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect: 'mysql',
        port: parseInt(process.env.MYSQL_PORT as string),
        host: process.env.MYSQL_HOST as string
    }

);

export const ConectarBanco = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conectado ao banco de dados com sucesso");
    } catch (error) {
        console.error("Erro ao conectar o banco de dados:", error);
    }
};

