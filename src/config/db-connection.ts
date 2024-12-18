import { DataSource } from 'typeorm';
import { User } from '@/entity/user.entity';
import config from './index';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.postgresql.host,
  port: config.postgresql.port,
  username: config.postgresql.user,
  password: config.postgresql.password,
  database: config.postgresql.database,
  synchronize: true,
  entities: [User],
});
