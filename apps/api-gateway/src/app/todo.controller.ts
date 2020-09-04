import {
  Controller,
  Get,
  Body,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { TodoController as ITodoController, Todo } from '@poc/interfaces';
import { Observable } from 'rxjs';

@Controller('todo')
export class TodoController implements ITodoController {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://redis:6379',
      },
    });
  }

  @Post()
  addTodo(@Body('title') title: string): Observable<Todo> {
    return this.client.send<Todo, string>('addTodo', title);
  }

  @Get()
  getTodos(): Observable<Todo[]> {
    return this.client.send<Todo[], string>('getTodos', '');
  }

  @Put()
  updateTodo(@Body() newData: Todo): Observable<Todo> {
    return this.client.send<Todo, Todo>('updateTodo', newData);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number): Observable<void> {
    return this.client.send<void, number>('deleteTodo', id);
  }
}
