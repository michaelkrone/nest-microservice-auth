import { NestFactory } from '@nestjs/core';

import { ApplicationModule } from './app.module';
import { MicroserviceConfig } from './classes/microservice-config';
import { config } from './config/server';

export async function bootstrap(
	microserviceConfig: MicroserviceConfig = config
) {
	const app = await NestFactory.createMicroservice(
		ApplicationModule,
		microserviceConfig
	);
	app.listen(() => console.log('Authentication microservice is listening'));
}
