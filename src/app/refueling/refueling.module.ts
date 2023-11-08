import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RefuelingEntity } from './refueling.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RefuelingEntity])],
})
export class RefuelingModule {}
