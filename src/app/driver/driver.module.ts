import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DriverController } from './driver.controller';
import { DriverEntity } from './driver.entity';
import { DriverService } from './driver.service';

@Module({
  imports: [TypeOrmModule.forFeature([DriverEntity])],
  providers: [DriverService],
  controllers: [DriverController],
})
export class DriverModule {}
