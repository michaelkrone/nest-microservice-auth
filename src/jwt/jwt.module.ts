import { Module } from '@nestjs/common';

import { JwtConfigToken, JwtSecretToken } from './config';
import { JwtService } from './jwt-service/jwt.service';
import { JwtAuthService } from './jwt-auth-service/jwt-auth.service';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';
import { jwtProviders } from './jwt.provider';

@Module({
	modules: [],
	components: [...jwtProviders, JwtService, JwtAuthService, JwtStrategy],
	controllers: [],
	exports: [JwtStrategy, JwtService]
})
export class JwtModule {}
