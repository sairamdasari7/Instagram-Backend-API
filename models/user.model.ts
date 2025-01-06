import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class User extends Model {
  id!: number;
  name!: string;
  mobile!: string;
  address!: string;
  postCount!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

// Insert dummy data into the Users table (Only if it's empty or for testing)
const insertDummyData = async () => {
  const users = await User.findAll();
  if (users.length === 0) {
    await User.create({
      name: 'John Doe',
      mobile: '1234567890',
      address: '123 Main St',
      postCount: 5,
    });

    await User.create({
      name: 'Jane Smith',
      mobile: '0987654321',
      address: '456 Another St',
      postCount: 3,
    });

    console.log('Dummy data inserted');
  }
};

insertDummyData(); // Call this to insert dummy data on startup

export default User;
