import express, { NextFunction, Request, Response } from 'express';
import userController from './controller/user-controller';
import { ValidationChain, validationResult } from 'express-validator';

const runValidations = (validations: ValidationChain[]) => {
    return async (req: Request,
                  res: Response,
                  next: NextFunction) => {
        await Promise.all(validations.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(400).json({error: 'ValidationError', data: undefined, success: false})
    }
}


const app = express();
// Parse JSON bodies
app.use(express.json());

// Define your routes here
app.get('/users/', userController.getUsers);
app.post('/users/new', runValidations(userController.requiredFields), userController.createUser);
app.get('/users/:id', userController.getUserById);
app.post('/users/edit/:userId', userController.updateUser);
app.delete('/users/delete/:userId', userController.deleteUser);

const PORT = Number(process.env.SERVER_PORT || 3000);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
