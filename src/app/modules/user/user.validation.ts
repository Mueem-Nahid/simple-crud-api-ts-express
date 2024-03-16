import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    userName: z.string({
      required_error: 'User name is required.',
    }),
    password: z.string({
      required_error: 'Password is required.',
    }),
  }),
});

const updateUserZodSchema = z.object({
  body: z.object({
    userName: z.string().optional(),
    password: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema
};
