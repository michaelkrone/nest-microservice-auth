import { Component, Inject } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { JwtConfigToken, JwtSecretToken } from '../config/token';
import { CredentialProvider } from '../classes/credential-provider.interface';

@Component()
export class JwtService implements CredentialProvider {
	constructor(
		@Inject(JwtConfigToken) private readonly config: any,
		@Inject(JwtSecretToken) private readonly secret: string
	) {}

	async sign(payload: any) {
		const token = await jwt.sign(payload, this.secret, this.config);
		return {
			expires_in: this.config.expiresIn,
			access_token: token
		};
	}
}
