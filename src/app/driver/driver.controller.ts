import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';

import { DriverEntity } from './driver.entity';
import { DriverService } from './driver.service';
import { DriverDTO } from './driver.dto';

@Controller('drivers')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  async findAll(): Promise<DriverEntity[]> {
    return await this.driverService.findAll();
  }

  @Post()
  async create(@Body() driver: DriverDTO): Promise<DriverEntity> {
    return await this.driverService.create(driver);
  }
}
