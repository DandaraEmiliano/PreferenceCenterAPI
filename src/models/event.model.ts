import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Event extends Model {
  public id!: string;
  public userId!: string;
  public consentId!: string;
  public enabled!: boolean;
}

Event.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    consentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Event',
  }
);

export default Event;
