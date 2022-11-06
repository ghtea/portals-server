import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePortalDto } from './dto/create-portal.dto';
import { UpdatePortalDto } from './dto/update-portal.dto';

@Injectable()
export class PortalsService {
  constructor(private prisma: PrismaService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createPortalDto: CreatePortalDto) {
    // return this.prisma.portal.create({ data: createPortalDto })
  }

  getAll() {
    return this.prisma.portal.findMany();
  }

  getById(id: number) {
    return this.prisma.portal.findUnique({ where: { id: id } }); }

  update(id: number, updatePortalDto: UpdatePortalDto) {
    return this.prisma.user.update({ where: { id: id }, data: updatePortalDto })
  }

  remove(id: number) {
    return this.prisma.portal.delete({ where: { id: id } })
  }
}
