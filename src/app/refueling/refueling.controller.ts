import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common/pipes/parse-uuid.pipe';

import { RefuelingDTO } from './refueling.dto';
import { RefuelingEntity } from './refueling.entity';
import { RefuelingService } from './refueling.service';

@Controller('refuelings')
export class RefuelingController {
  constructor(private readonly refuelingService: RefuelingService) {}

  @Get(':driverId')
  async findAllById(
    @Param('driverId', ParseUUIDPipe) driverId: string,
  ): Promise<RefuelingEntity[]> {
    return await this.refuelingService.findAllById(driverId);
  }

  @Post(':driverId')
  async create(
    @Param('driverId', ParseUUIDPipe) driverId: string,
    @Body() refueling: RefuelingDTO,
  ): Promise<RefuelingEntity> {
    return await this.refuelingService.create(driverId, refueling);
  }
}
