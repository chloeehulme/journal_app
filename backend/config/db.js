// Connection details
import dotenv from 'dotenv';
import Sequelize from 'sequelize';
dotenv.config();

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: 5432,
});

export default connection;