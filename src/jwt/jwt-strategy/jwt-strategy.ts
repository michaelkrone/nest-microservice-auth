import { Component, Inject } from '@nestjs/common';
import { Request } from 'express';
import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import {
	JwtConfigToken,
	JwtSecretToken,
	JwtValidationServiceToken
} from '../config/token';

@Component()
export class JwtStrategy extends Strategy {
	constructor(
		@Inject(JwtValidationServiceToken) private readonly authService: any,
		@Inject(JwtConfigToken) private readonly config: any,
		@Inject(JwtSecretToken) private readonly secret: string
	) {
		super(
			{
				...config,
				jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
				passReqToCallback: true,
				secretOrKey: secret
			},
			async (req, payload, next) => await this.verify(req, payload, next)
		);
		passport.use(this);
	}

	public async verify(req: Request, payload: any, done: Function) {
		const isValid = await this.authService.validate(payload);
		if (!isValid) {
			return done('Unauthorized', false);
		}
		done(null, payload);
	}
}
