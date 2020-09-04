import { Observable } from 'rxjs';
import { Todo } from '@poc/interfaces';

export interface TodoController {
  addTodo(title: string): Observable<Todo>;
  getTodos(): Observable<Todo[]>;
  updateTodo(newData: Todo): Observable<Todo>;
  deleteTodo(id: number): void;
}
