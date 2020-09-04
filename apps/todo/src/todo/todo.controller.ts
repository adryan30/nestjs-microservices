import { Controller } from '@nestjs/common';

import { Todo } from '@poc/interfaces';

import { TodoService } from './todo.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @MessagePattern('addTodo')
  addTodo(title: string): Todo {
    return this.todoService.addTodo(title);
  }

  @MessagePattern('getTodos')
  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }

  @MessagePattern('updateTodo')
  updateTodo(newData: Todo): Todo {
    return this.todoService.updateTodo(newData);
  }

  @MessagePattern('deleteTodo')
  deleteTodo(id: number): void {
    return this.todoService.deleteTodo(id);
  }
}
