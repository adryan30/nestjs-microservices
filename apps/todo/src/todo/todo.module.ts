import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '@poc/entities';

import { environment } from '../environments/environment';

import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

const { db } = environment;
@Module({
  imports: [TypeOrmModule.forRoot(db), TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [
    {
      provide: TodoService,
      useClass: TodoService,
    },
  ],
})
export class TodoModule {}
