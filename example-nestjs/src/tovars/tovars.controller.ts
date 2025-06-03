import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException } from '@nestjs/common';
import { TovarsService } from './tovars.service';
import { CreateTovarDto } from './dto/create-tovar.dto';
import { UpdateTovarDto } from './dto/update-tovar.dto';
import { Tovar } from './entities/tovar.entity';

@Controller('tovars')
export class TovarsController {
  constructor(private readonly tovarsService: TovarsService) {}

  @Post()
  create(@Body() createTovarDto: CreateTovarDto) {
    return this.tovarsService.create(createTovarDto);
  }

  @Get()
  findAll(@Query('title') title?: string): Tovar[] {
    return this.tovarsService.findAll(title);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tovarsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTovarDto: UpdateTovarDto) {
    return this.tovarsService.update(+id, updateTovarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tovarsService.remove(+id);
  }
}