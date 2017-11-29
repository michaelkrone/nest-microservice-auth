import { Component, Inject } from '@nestjs/common';

import { PasswordService } from '../../auth/password-service/password.service';
import { JwtService } from '../jwt-service/jwt.service';
import { AuthRequestDto, Auth, AuthRepositoryToken } from '../index';
import { Repository } from 'typeorm/repository/Repository';

@Component()
export class AuthService {
	constructor(
		@Inject(AuthRepositoryToken) private readonly repository: Repository<Auth>,
		private readonly credentialProvider: JwtService
	) {}

	async authenticate(authRequest: AuthRequestDto) {
		const auth = await this.repository.findOne({ reference: authRequest.id });
		if (
			auth &&
			PasswordService.check(
				authRequest.password,
				auth.hashedPassword,
				auth.salt
			)
		) {
			return this.credentialProvider.sign(authRequest.payload);
		}
		return null;
	}

	async create(authRequest: AuthRequestDto) {
		const { hashedPassword, salt } = PasswordService.encrypt(
			authRequest.password
		);
		await this.repository.create(
			new Auth(hashedPassword, salt, authRequest.id)
		);
		return this.credentialProvider.sign(authRequest.payload);
	}
}
