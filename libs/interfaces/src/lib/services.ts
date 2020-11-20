import { Todo } from '@poc/interfaces';

export interface TodoService {
  addTodo(title: string): Promise<Todo>;
  getTodos(): Promise<Todo[]>;
  updateTodo({ id, title, completed }: Todo): Promise<Todo>;
  deleteTodo(id: number): void;
}
