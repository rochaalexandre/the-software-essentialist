import { Prisma, User as PrismaModel } from '@prisma/client';
export interface UserCreateInput extends Prisma.UserCreateInput {}
export interface UserUpdateInput extends Prisma.UserUpdateInput {}
export interface User extends PrismaModel{}