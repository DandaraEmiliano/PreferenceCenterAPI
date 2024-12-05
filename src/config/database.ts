import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'preference_center',
  process.env.DB_USER || 'dandaraemiliano',
  process.env.DB_PASSWORD || '1234',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: (process.env.DB_DIALECT as 'postgres') || 'postgres',
  },
);

export default sequelize;
