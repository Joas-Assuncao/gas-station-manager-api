import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverEntity } from './driver.entity';
import { DriverService } from './driver.service';

@Module({
  imports: [TypeOrmModule.forFeature([DriverEntity])],
  providers: [DriverService],
})
export class DriverModule {}
