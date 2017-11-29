import { PipeTransform, Pipe, ArgumentMetadata } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { RpcException } from '@nestjs/microservices';

@Pipe()
export class RpcValidationPipe implements PipeTransform<any> {
	public async transform(value, metadata: ArgumentMetadata) {
		const { metatype } = metadata;
		if (!metatype || !this.toValidate(metatype)) {
			return value;
		}
		const entity = plainToClass(metatype, value);
		const errors = await validate(entity);
		if (errors.length > 0) {
			throw new RpcException(errors);
		}
		return value;
	}

	private toValidate(metatype): boolean {
		const types = [String, Boolean, Number, Array, Object];
		return !types.find(type => metatype === type);
	}
}
