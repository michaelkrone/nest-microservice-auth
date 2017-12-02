import { Transport } from '@nestjs/microservices';
import { MicroserviceConfig } from '../classes/microservice-config.interface';

export const config: MicroserviceConfig = {
	port: 6379,
	transport: Transport.REDIS
};
