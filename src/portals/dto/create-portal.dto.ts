import { ApiProperty } from '@nestjs/swagger';

export class CreatePortalDto {
  @ApiProperty()
    title: string;

  @ApiProperty()
    endAt: Date;

  @ApiProperty({ required: false })
    priority?: string;

  @ApiProperty()
    status: string;

  @ApiProperty({ required: false, default: false })
    contentType?: boolean = false;

  // creator: UserDto
}
