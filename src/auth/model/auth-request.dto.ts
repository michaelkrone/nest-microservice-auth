import { IsString, IsNotEmpty } from 'class-validator';

export class AuthRequestDto {
	@IsString() readonly id: string;

	@IsString() readonly password: string;

	@IsNotEmpty() readonly payload: any;
}
