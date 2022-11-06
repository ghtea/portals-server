import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatePortalDto } from './dto/create-portal.dto';
import { UpdatePortalDto } from './dto/update-portal.dto';
import { PortalsService } from './portals.service';

@Controller('portals')
export class PortalsController {
  constructor(private readonly portalsService: PortalsService) {}

  @Post()
  create(@Body() createPortalDto: CreatePortalDto) {
    return this.portalsService.create(createPortalDto);
  }

  @Get()
  getAll() {
    return this.portalsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.portalsService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePortalDto: UpdatePortalDto) {
    return this.portalsService.update(+id, updatePortalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portalsService.remove(+id);
  }
}
