import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { ApplicationModule } from './app.module';
import { MicroserviceConfig } from './shared/classes/microservice-config.interface';
import { microserviceConfig } from './config/server';

export async function bootstrap(
	config: MicroserviceConfig = microserviceConfig
) {
	const app = await NestFactory.createMicroservice(ApplicationModule, config);
	app.listen(() =>
		console.log('Authentication microservice is listening', config)
	);
}
bootstrap();
