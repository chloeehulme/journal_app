// Connection details
import dotenv from 'dotenv';
import Sequelize from 'sequelize';
dotenv.config();

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
});

connection.authenticate()
  .then(() => console.log('Connection successful'))
  .catch((err) => console.error('Connection failed:', err.message));

export default connection;