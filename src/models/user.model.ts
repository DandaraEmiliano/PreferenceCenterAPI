import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
  public id!: string;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;
