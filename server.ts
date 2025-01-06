import express from 'express';
import bodyParser from 'body-parser';
import User from './models/user.model'; // Import the User model
import sequelize from './database';

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Dummy data insertion logic (optional)
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

// GET route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

// POST route to create a new user
app.post('/users', async (req, res) => {
  try {
    const { name, mobile, address, postCount } = req.body;

    // Create a new user in the database
    const newUser = await User.create({
      name,
      mobile,
      address,
      postCount,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

// Sync the database and insert dummy data if no users exist
const startServer = async () => {
  try {
    await sequelize.sync();
    await insertDummyData(); // Insert dummy data
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Error syncing database or starting server:', error);
  }
};

startServer();
