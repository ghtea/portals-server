import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { PortalsController } from './portals.controller';
import { PortalsService } from './portals.service';

@Module({
  controllers: [PortalsController],
  providers: [PortalsService],
  imports: [PrismaModule],
})
export class PortalsModule {}
