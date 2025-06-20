// models/Entry.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('journal_app', 'postgres', 'mysecretpassword', {
  host: 'localhost',   // connect to local machine where docker port is exposed
  dialect: 'postgres',
  port: 5432,          // default PostgreSQL port, mapped to container
});

const Entry = sequelize.define('Entry', {
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  entry_date: {
    type: DataTypes.DATEONLY,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  mood: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  challenge: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lesson: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  peak: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pit: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gratitude: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'journal_entries',
  timestamps: false,
});

module.exports = Entry;