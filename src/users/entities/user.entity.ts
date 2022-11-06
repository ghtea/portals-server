import { ApiProperty } from '@nestjs/swagger';
import { User, UserRole } from '@prisma/client';
export class UserEntity implements User {
  @ApiProperty()
    id: number;

  @ApiProperty()
    createdAt: Date;

  @ApiProperty()
    updatedAt: Date;

  @ApiProperty()
    email: string;

  @ApiProperty({ required: false, nullable: true })
    name: string | null;

  @ApiProperty({ required: false, nullable: true })
    picture: string | null;

  @ApiProperty({ required: false, nullable: true })
    googleId: string | null;

  @ApiProperty()
    role: UserRole;
}