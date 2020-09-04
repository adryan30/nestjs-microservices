import { Injectable } from '@nestjs/common';
import { TodoService as ITodoService, Todo } from '@poc/interfaces';

@Injectable()
export class TodoService implements ITodoService {
  todos = [];

  addTodo(title: string): Todo {
    const newTodo: Todo = {
      id: this.todos.length,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  updateTodo(newData: Todo): Todo {
    this.todos[newData.id] = newData;
    return newData;
  }
  deleteTodo(id: number): void {
    this.todos.splice(id, 1);
  }
}
