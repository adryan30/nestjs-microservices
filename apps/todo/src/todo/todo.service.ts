import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '@poc/entities';
import { TodoService as ITodoService } from '@poc/interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService implements ITodoService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  async addTodo(title: string): Promise<Todo> {
    return await this.todosRepository.save({
      title,
      completed: false,
    });
  }

  async getTodos(): Promise<Todo[]> {
    return await this.todosRepository.find();
  }
  async updateTodo({ id, title, completed }: Todo): Promise<Todo> {
    await this.todosRepository.update({ id }, { title, completed });
    return { id, title, completed };
  }
  deleteTodo(id: number): void {
    this.todosRepository.delete(id);
  }
}
