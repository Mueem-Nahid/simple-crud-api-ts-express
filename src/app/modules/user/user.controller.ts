import { Request, Response } from 'express';
import { IUser } from './user.interface';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { ...user } = req.body;
    const result: IUser | null = UserService.createUser(user);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'User created successfully !',
      data: result,
    });
  }
);

const getAllUser = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result: IUser[] | null = UserService.getAllUser();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All users.',
      data: result,
    });
  }
);

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const result = UserService.getSingleUser(id);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Ok',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const data = req.body;
  const result = UserService.updateUser(id, data);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated !',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id: string = req.params.id;
  UserService.deleteUser(id);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.NO_CONTENT,
    success: true,
    message: 'User deleted !',
  });
});

export const UserController = {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
};
