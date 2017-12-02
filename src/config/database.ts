import { join } from 'path';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { AuthInfo } from '../auth/model/auth-info.entity';

// const entities = [join(__dirname, '../', '**/**.entity.{ts, js}')];

export const DatabaseConfig: MongoConnectionOptions = {
	type: 'mongodb',
	host: 'localhost',
	port: 27017,
	database: 'accounts',
	entities: [AuthInfo]
};
