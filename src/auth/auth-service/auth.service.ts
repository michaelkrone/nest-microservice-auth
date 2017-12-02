import { Component, Inject } from '@nestjs/common';
import { MongoRepository } from 'typeorm';

import { JwtService } from '../../jwt';
import { AuthRequestDto, AuthInfo } from '../model';
import { AuthRepositoryToken } from '../config';
import { PasswordService } from '../password-service/password.service';

@Component()
export class AuthService {
	constructor(
		@Inject(AuthRepositoryToken)
		private readonly repository: MongoRepository<AuthInfo>,
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
		await this.repository.replaceOne(
			{ reference: authRequest.id },
			new AuthInfo(hashedPassword, salt, authRequest.id),
			{ upsert: true }
		);
		return this.credentialProvider.sign(authRequest.payload);
	}
}
