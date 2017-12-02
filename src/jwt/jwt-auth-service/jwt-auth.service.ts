import { Component, Inject } from '@nestjs/common';

export interface JwtAuth {
	validate(request: any): Promise<boolean>;
}

@Component()
export class JwtAuthService implements JwtAuth {
	async validate(request: any): Promise<boolean> {
		return await true;
	}
}
