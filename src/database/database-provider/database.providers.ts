import { createConnection, Connection } from 'typeorm';

import { DatabaseConfig } from '../../config';
import { AuthDbConnectionToken } from '../config/token';

export const databaseProviders = [
	{
		provide: AuthDbConnectionToken,
		useFactory: async (): Promise<Connection> =>
			await createConnection(DatabaseConfig)
	}
];
