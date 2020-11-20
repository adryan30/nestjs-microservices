import { TodoEnvironment } from '@poc/interfaces';
import { Todo } from '@poc/entities';

export const environment: TodoEnvironment = {
  production: false,
  db: {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'poc',
    password: 'poc',
    database: 'poc',
    entities: [Todo],
  },
};
