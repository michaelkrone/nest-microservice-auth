import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { AuthService } from './auth-service/auth.service';
import { AuthController } from './auth-controller/auth.controller';
import { PasswordService } from './password-service/password.service';
import { authProviders } from './auth.provider';
import { JwtModule } from '../jwt/jwt.module';

@Module({
	modules: [DatabaseModule, JwtModule],
	components: [...authProviders, AuthService, PasswordService],
	controllers: [AuthController],
	exports: []
})
export class AuthModule {}
