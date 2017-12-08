import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class AuthRequestDto {
	@ApiModelProperty()
	@IsString()
	readonly id: string;

	@ApiModelProperty()
	@IsString()
	readonly password: string;

	@ApiModelProperty()
	@IsNotEmpty()
	readonly payload: any;
}
