import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverEntity } from '../driver/driver.entity';
import { DriverService } from '../driver/driver.service';
import { RefuelingController } from './refueling.controller';

import { RefuelingEntity } from './refueling.entity';
import { RefuelingService } from './refueling.service';

@Module({
  imports: [TypeOrmModule.forFeature([RefuelingEntity, DriverEntity])],
  providers: [RefuelingService, DriverService],
  controllers: [RefuelingController],
})
export class RefuelingModule {}
