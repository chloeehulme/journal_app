import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

// User model
const User = sequelize.define('User', {
  
}, {
  tableName: '',
  timestamps: true,
});

module.exports = User;