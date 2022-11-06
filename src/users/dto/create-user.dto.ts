import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty()
    email: string;

  @ApiProperty({ required: false })
    name?: string;

  @ApiProperty({ required: false })
    picture?: string;

  @ApiProperty({ required: false, enum: UserRole, enumName: 'UserRole' })
    role?: UserRole;

  @ApiProperty({ required: false })
    googleId?: string;
}
