import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateThoughtDto } from './dto/create-thought.dto';
import { UpdateThoughtDto } from './dto/update-thought.dto';
import { Thought } from './thought.entity';

@Injectable()
export class ThoughtsService {
  constructor(
    @InjectRepository(Thought)
    private readonly thoughtsRepository: Repository<Thought>,
  ) {}

  findAll() {
    return this.thoughtsRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(slug: string) {
    const thought = await this.thoughtsRepository.findOneBy({ slug });

    if (!thought) {
      throw new NotFoundException(`Thought "${slug}" was not found`);
    }

    return thought;
  }

  async create(createThoughtDto: CreateThoughtDto) {
    const existingThought = await this.thoughtsRepository.findOneBy({
      slug: createThoughtDto.slug,
    });

    if (existingThought) {
      throw new ConflictException(`Thought "${createThoughtDto.slug}" already exists`);
    }

    return this.thoughtsRepository.save(createThoughtDto);
  }

  async update(slug: string, updateThoughtDto: UpdateThoughtDto) {
    const thought = await this.findOne(slug);
    const nextThought = this.thoughtsRepository.merge(thought, updateThoughtDto);

    return this.thoughtsRepository.save(nextThought);
  }

  async remove(slug: string) {
    const thought = await this.findOne(slug);

    await this.thoughtsRepository.remove(thought);

    return {
      deleted: true,
      slug,
    };
  }
}
