import { Todo } from '@poc/interfaces';

export interface TodoService {
  addTodo(title: string): Todo;
  getTodos(): Todo[];
  updateTodo(newData: Todo): Todo;
  deleteTodo(id: number): void;
}
