import { Controller, UsePipes, Inject } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';

import { RpcValidationPipe } from '../../shared/rpc-validation-pipe/rpc-validation.pipe';
import { AuthRequestDto } from '../model/auth-request.dto';
import { AuthService } from '../auth-service/auth.service';

@UsePipes(new RpcValidationPipe())
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@MessagePattern({ cmd: 'authenticate' })
	async authenticate(authRequestDto: AuthRequestDto) {
		const token = await this.authService.authenticate(authRequestDto);
		if (!token) {
			throw new RpcException('Invalid credentials');
		}
		return token;
	}

	@MessagePattern({ cmd: 'create' })
	async create(authRequestDto: AuthRequestDto) {
		const token = await this.authService.create(authRequestDto);
		if (!token) {
			throw new RpcException('Invalid credentials');
		}
		return token;
	}
}
