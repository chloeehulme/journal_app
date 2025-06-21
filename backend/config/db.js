// Connection details
import Sequelize from 'sequelize';

const connection = new Sequelize('journal_app', 'postgres', 'mysecretpassword', { // change on deployment
  host: 'localhost',   // change on deployment
  dialect: 'postgres',
  port: 5432,          // default PostgreSQL port, mapped to container
});

export default connection;