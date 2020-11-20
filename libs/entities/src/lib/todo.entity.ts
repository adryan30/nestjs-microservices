import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'boolean' })
  completed: boolean;
}
