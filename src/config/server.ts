import { Transport } from '@nestjs/microservices';
import { MicroserviceConfig } from '../shared/classes/microservice-config.interface';

export const microserviceConfig: MicroserviceConfig = {
	port: 6379,
	transport: Transport.REDIS
};
