import { Request } from 'express';
import { UserEntity } from './../users/entities/user.entity';

export type RequestWithUser = Request & {
  user: UserEntity;
}