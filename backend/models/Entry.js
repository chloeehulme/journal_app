import { Sequelize, DataTypes } from 'sequelize';
import connection from '../config/db.js';

// Entry model
const Entry = connection.define('Entry', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
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
    allowNull: false,
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
    allowNull: false,
  }
}, {
  tableName: 'journal_entries',
  timestamps: false,
});

export default Entry;