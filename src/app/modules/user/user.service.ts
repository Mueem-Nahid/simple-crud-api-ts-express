import { IUser } from './user.interface';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const users: IUser[] = [];

const createUser = (user: IUser) => {
  const newUser: IUser = {
    id: users.length + 1,
    userName: user.userName,
    password: user.password,
  };
  users.push(newUser);
  return newUser;
};

const getAllUser = (): IUser[] => {
  return users;
};

const getSingleUser = (id: string): IUser | undefined => {
  const user = users.find(user => user.id === parseInt(id));
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found.');
  }
  return user;
};

export const UserService = {
  createUser,
  getAllUser,
  getSingleUser,
};
