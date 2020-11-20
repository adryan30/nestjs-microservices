import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface TodoEnvironment {
  production: boolean;
  db: TypeOrmModuleOptions;
}
