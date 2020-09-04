import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { TodoModule } from './todo/todo.module';

const logger = new Logger('TodoMicroservice');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TodoModule,
    {
      transport: Transport.REDIS,
      options: {
        url: 'redis://redis:6379',
      },
    }
  );
  app.listen(() => logger.log('TodoMicroservice listening...'));
}

bootstrap();
