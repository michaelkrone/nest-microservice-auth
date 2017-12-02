import { Connection, MongoRepository } from 'typeorm';

import { AuthDbConnectionToken } from '../database';
import { AuthRepositoryToken } from './config';
import { AuthInfo } from './model';

export const authProviders = [
	{
		provide: AuthRepositoryToken,
		useFactory: (connection: Connection): MongoRepository<AuthInfo> =>
			connection.getMongoRepository(AuthInfo),
		inject: [AuthDbConnectionToken]
	}
];
