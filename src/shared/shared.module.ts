import { Module } from '@nestjs/common';
import { RpcValidationPipe } from './rpc-validation-pipe/rpc-validation.pipe';

@Module({
	modules: [],
	components: [RpcValidationPipe],
	exports: [RpcValidationPipe]
})
export class SharedModule {}
