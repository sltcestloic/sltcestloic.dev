import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thought } from './thought.entity';
import { ThoughtsController } from './thoughts.controller';
import { ThoughtsService } from './thoughts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Thought])],
  controllers: [ThoughtsController],
  providers: [ThoughtsService],
})
export class ThoughtsModule {}
