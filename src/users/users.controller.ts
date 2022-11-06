import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';
@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get() // WIP:
  // @UseGuards(AuthGuard('google'))
  @ApiOkResponse({ type: UserEntity })
  getCurrentUser(@Req() req) {
    return this.usersService.getCurrentUser(req);
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  findById(@Param('id') id: string) { // WIP:
    return this.usersService.findById(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
