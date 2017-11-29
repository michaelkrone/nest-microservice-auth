import { Transport } from '@nestjs/microservices';

export interface MicroserviceConfig {
	port: 6379;
	transport: Transport;
}
