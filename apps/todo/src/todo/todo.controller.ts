import { Controller } from '@nestjs/common';

import { Todo } from '@poc/interfaces';

import { TodoService } from './todo.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @MessagePattern('addTodo')
  async addTodo(title: string): Promise<Todo> {
    return await this.todoService.addTodo(title);
  }

  @MessagePattern('getTodos')
  async getTodos(): Promise<Todo[]> {
    return await this.todoService.getTodos();
  }

  @MessagePattern('updateTodo')
  async updateTodo(newData: Todo): Promise<Todo> {
    return await this.todoService.updateTodo(newData);
  }

  @MessagePattern('deleteTodo')
  deleteTodo(id: number): void {
    return this.todoService.deleteTodo(id);
  }
}
