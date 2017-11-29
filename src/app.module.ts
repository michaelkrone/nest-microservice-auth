import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';

@Module({
	modules: [AuthModule],
	components: [],
	exports: [AuthModule]
})
export class ApplicationModule {}
