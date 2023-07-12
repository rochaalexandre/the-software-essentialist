import express from 'express';
import userController from './controller/user-controller';

const app = express();

// Parse JSON bodies
app.use(express.json());

// Define your routes here
app.post('/users', userController.createUser);
app.get('/users', userController.getUsers);
app.get('/users/:id', userController.getUserById);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

const PORT = Number(process.env.SERVER_PORT || 3000);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
