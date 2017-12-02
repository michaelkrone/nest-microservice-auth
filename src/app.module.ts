import { Module } from '@nestjs/common';
import { Connection, MongoRepository } from 'typeorm';

import { AuthModule } from './auth';

@Module({
	modules: [AuthModule]
})
export class ApplicationModule {}
