import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { AuthService } from './auth-service/auth.service';
import { AuthController } from './auth-controller/auth.controller';
import { JwtService } from './jwt-service/jwt.service';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';
import { PasswordService } from './password-service/password.service';
import { authProviders } from './auth.provider';

@Module({
	modules: [DatabaseModule],
	components: [...authProviders, AuthService, JwtService, PasswordService],
	controllers: [AuthController],
	exports: [JwtStrategy]
})
export class AuthModule {}
