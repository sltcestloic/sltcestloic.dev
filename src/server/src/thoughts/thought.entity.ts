import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('thoughts')
export class Thought {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 180 })
  title: string;

  @Column({ length: 220 })
  description: string;

  @Index({ unique: true })
  @Column({ length: 120 })
  slug: string;

  @Column({ type: 'text' })
  markdown: string;

  @Column({ length: 40, default: '2 min' })
  readTime: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
