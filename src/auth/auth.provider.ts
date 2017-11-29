import { Connection, Repository } from 'typeorm';

import {
	AuthStrategyToken,
	JwtConfigToken,
	JwtSecretToken,
	CredentialProviderToken
} from './config/token';
import { AuthDbConnectionToken } from '../database/config/token';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';
import { JwtService } from './jwt-service/jwt.service';
import { JwtAuthService } from './jwt-auth-service/jwt-auth.service';
import { JwtValidationServiceToken, AuthRepositoryToken, Auth } from './index';

export const authProviders = [
	{
		provide: JwtValidationServiceToken,
		useClass: JwtAuthService
	},
	{
		provide: CredentialProviderToken,
		useClass: JwtService
	},
	{
		provide: AuthStrategyToken,
		useClass: JwtStrategy
	},
	{
		provide: JwtConfigToken,
		useValue: {
			expiresIn: '4d',
			issuer: 'accounts.localhost',
			audience: 'localhost'
		}
	},
	{
		provide: JwtSecretToken,
		useValue: '34ðhiÏ7wßœ6whe²³üherh__@290Ð3g2b3¢b9eDÞG@#t23tsd127ø'
	},
	{
		provide: AuthRepositoryToken,
		useFactory: (connection: Connection): Repository<Auth> =>
			connection.getRepository(Auth),
		inject: [AuthDbConnectionToken]
	}
];
