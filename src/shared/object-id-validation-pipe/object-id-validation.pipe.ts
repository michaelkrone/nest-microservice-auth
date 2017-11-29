import { RpcException } from '@nestjs/microservices';
import { PipeTransform, Pipe, ArgumentMetadata } from '@nestjs/common';
import { ObjectId } from 'bson';

@Pipe()
export class ObjectIdValidationPipe implements PipeTransform<string> {
	async transform(value: string, metadata: ArgumentMetadata) {
		if (!ObjectId.isValid(value)) {
			throw new RpcException('Validation failed');
		}

		return value;
	}
}
