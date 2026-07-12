import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Public } from '../auth/public.decorator';
import { CreateThoughtDto } from './dto/create-thought.dto';
import { UpdateThoughtDto } from './dto/update-thought.dto';
import { ThoughtsService } from './thoughts.service';

@Controller('thoughts')
export class ThoughtsController {
  constructor(private readonly thoughtsService: ThoughtsService) {}

  @Public()
  @Get()
  findAll() {
    return this.thoughtsService.findAll();
  }

  @Public()
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.thoughtsService.findOne(slug);
  }

  @Post()
  create(@Body() createThoughtDto: CreateThoughtDto) {
    return this.thoughtsService.create(createThoughtDto);
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() updateThoughtDto: UpdateThoughtDto) {
    return this.thoughtsService.update(slug, updateThoughtDto);
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.thoughtsService.remove(slug);
  }
}
