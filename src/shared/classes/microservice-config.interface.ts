import { Transport } from '@nestjs/microservices';

export interface MicroserviceConfig {
	port: number;
	transport: Transport;
}
