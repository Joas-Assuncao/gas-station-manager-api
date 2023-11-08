import { DriverEntity } from './driver.entity';
import { DriverService } from './driver.service';

import { Controller, Get } from '@nestjs/common';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  async findAll(): Promise<DriverEntity[]> {
    return await this.driverService.findAll();
  }
}
