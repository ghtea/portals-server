import { Injectable, Req } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto })
  }

  getCurrentUser(@Req() req) {
    console.log('req.user: ', req.user)
    // return this.prisma.user.findUnique({ where: { id: id } });
  }

  findById(id: number) {
    return this.prisma.user.findUnique({ where: { id: id } });
  }

  findByGoogleId(googleId: string){
    return this.prisma.user.findUnique({ where: { googleId: googleId } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id: id }, data: updateUserDto })
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id: id } })
  }
}
