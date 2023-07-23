import { Request, Response } from 'express';
import { User } from '../models/user-model';
import userRepository from '../repository/user-repository';
import { body, ValidationChain } from 'express-validator';

class UserController {
    public requiredFields: ValidationChain[] = [
        body('userName').notEmpty().isLength({min: 3}),
        body('firstName').notEmpty().isLength({min: 3}),
        body('lastName').notEmpty().isLength({min: 3}),
        body('password').notEmpty().isLength({min: 3}),
        body('email').isEmail()
    ]

     createUser = async (req: Request, res: Response) => {
        const user: User = req.body;
        let error = await this.validateUserName(user.userName);
        if (error) {
            res.status(409).json({error, data: undefined, success: false});
            return
        }
        error = await this.validateEmail(user.email);
        if (error) {
            res.status(409).json({error, data: undefined, success: false});
            return
        }

        let result = await userRepository.createUser(user);
        return res.status(201).json(result);
    }

     getUsers = async(req: Request, res: Response) => {
        const {email} = req.query

        let users
        if (email) {
            const result = await userRepository.findByEmail(email as string);
            users = [result]
        }else {
            users= await userRepository.getUsers();
        }

        res.status(200).json({ error: undefined, data: users, success: true } );
    }

     getUserById = async(req: Request, res: Response) => {
        const { id } = req.params;
        const user = await userRepository.getUserById(Number(id));
        if (user) {
            res.status(200).json({ error: undefined, data: user, success: true } );
        } else {
            res.status(404).json({ error: 'UserNotFound', data: undefined, success: false });
        }
    }

     updateUser = async(req: Request, res: Response) => {
        const { userId } = req.params;
        const userParam: User = req.body;
        let error = await this.validateUserName(userParam.userName);
        if (error) {
            res.status(409).json({error, data: undefined, success: false});
            return
        }
        error = await this.validateEmail(userParam.email);
        if (error) {
            res.status(409).json({error, data: undefined, success: false});
            return
        }

        let result = await userRepository.updateUser(Number(userId), userParam);
        if (result) {
            res.json({ error: undefined, data: result, success: true } );
        } else {
            res.status(404).json({ error: 'UserNotFound', data: undefined, success: false });
        }
    }

     deleteUser = async(req: Request, res: Response) => {
        const { id } = req.params;
        const deleteUser = await userRepository.deleteUser(Number(id));
        if (deleteUser) {
            res.status(200).json(deleteUser);
        } else {
            res.status(404).json({ error: 'UserNotFound', data: undefined, success: false });
        }
    }

     private validateUserName = async(username: string)=>{
        console.log('username ',username)
        const exists = await userRepository.findByUserName(username)
        return exists ? 'UsernameAlreadyTaken': null
    }

     private validateEmail = async(email: string) =>  {
        const exists = await userRepository.findByEmail(email)
        return exists ? 'EmailAlreadyInUse': null
    }
}

let userController = new UserController();
export default userController;
