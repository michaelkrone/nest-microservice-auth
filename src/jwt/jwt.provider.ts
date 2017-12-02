import {
	JwtValidationServiceToken,
	JwtConfigToken,
	JwtSecretToken
} from './config';
import { JwtAuthService } from './jwt-auth-service/jwt-auth.service';
import { JwtService } from './jwt-service/jwt.service';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';

export const jwtProviders = [
	{
		provide: JwtValidationServiceToken,
		useClass: JwtAuthService
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
	}
];
