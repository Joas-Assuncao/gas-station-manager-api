import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common/pipes/parse-uuid.pipe';

import { DriverDTO } from './driver.dto';
import { DriverEntity } from './driver.entity';
import { DriverService } from './driver.service';

@Controller('drivers')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  async findAll(): Promise<DriverEntity[]> {
    return await this.driverService.findAll();
  }

  @Get('withRefuelings')
  async findAllWithRefuelings(): Promise<DriverEntity[]> {
    return await this.driverService.findAllWithRefuelings();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<DriverEntity> {
    return await this.driverService.findOne(id);
  }

  @Post()
  async create(@Body() driver: DriverDTO): Promise<DriverEntity> {
    return await this.driverService.create(driver);
  }
}
