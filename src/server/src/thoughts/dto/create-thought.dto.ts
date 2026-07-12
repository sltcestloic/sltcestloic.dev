import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateThoughtDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(180)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(220)
  description: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  slug: string;

  @IsString()
  @IsNotEmpty()
  markdown: string;

  @IsString()
  @IsOptional()
  @MaxLength(40)
  readTime?: string;
}
