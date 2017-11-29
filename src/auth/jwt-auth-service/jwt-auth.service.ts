import { Component, Inject } from '@nestjs/common';

@Component()
export class JwtAuthService {
	async validate(request: any): Promise<boolean> {
		return Promise.resolve(true);
	}
}
