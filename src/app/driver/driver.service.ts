import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DriverDTO } from './driver.dto';
import { DriverEntity } from './driver.entity';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(DriverEntity)
    private readonly driverRepository: Repository<DriverEntity>,
  ) {}

  async findAll(): Promise<DriverEntity[]> {
    return await this.driverRepository.find();
  }

  async create(driver: DriverDTO): Promise<DriverEntity> {
    return await this.driverRepository.save(driver);
  }
}
