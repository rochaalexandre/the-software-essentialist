import { Request, Response } from 'express';
import { User } from '../models/user-model';
import userRepository from '../repository/user-repository';

class UserController {
    async createUser(req: Request, res: Response) {
        const { name, email }: User = req.body;
        let user = await userRepository.createUser({ name, email });
        res.status(201).json(user);
    }

    async getUsers(req: Request, res: Response) {
        const users = await userRepository.getUsers();
        res.json(users);
    }

    async getUserById(req: Request, res: Response) {
        const { id } = req.params;
        const user = await userRepository.getUserById(Number(id));
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email } = req.body;
        let user = await userRepository.updateUser(Number(id), { name, email });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        const deleteUser = await userRepository.deleteUser(Number(id));
        if (deleteUser) {
            res.status(200).json(deleteUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }
}

let userController = new UserController();
export default userController;
