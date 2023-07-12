import prisma from '../prisma/prisma';
import { UserCreateInput, UserUpdateInput } from '../models/user-model';

class UserRepository {
    async createUser(data: UserCreateInput) {
        return prisma.user.create({
            data,
        });
    }

    async getUsers() {
        return prisma.user.findMany();
    }

    async getUserById(id: number) {
        return prisma.user.findUnique({
            where: {
                id,
            },
        });
    }

    async updateUser(id: number, data: UserUpdateInput) {
        return prisma.user.update({
            where: {
                id,
            },
            data,
        });
    }

    async deleteUser(id: number) {
        return prisma.user.delete({
            where: {
                id,
            },
        });
    }
}

let userRepository = new UserRepository();
export default userRepository;
