import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DriverService } from '../driver/driver.service';
import { RefuelingDTO } from './refueling.dto';
import { RefuelingEntity } from './refueling.entity';

@Injectable()
export class RefuelingService {
  constructor(
    @InjectRepository(RefuelingEntity)
    private readonly refuelingRepository: Repository<RefuelingEntity>,
    private readonly driverService: DriverService,
  ) {}

  async findAllById(id: string): Promise<RefuelingEntity[]> {
    return await this.refuelingRepository.find({
      where: {
        driver: { id },
      },
    });
  }

  async save(driverId, refueling: RefuelingDTO): Promise<RefuelingEntity> {
    const driver = await this.driverService.findOne(driverId);

    const refuelingEntity = new RefuelingEntity();
    refuelingEntity.liters = refueling.liters;
    refuelingEntity.fuelType = refueling.fuelType;
    refuelingEntity.fuelPrice = refueling.fuelPrice;
    refuelingEntity.totalPrice = this.calculateTotalPrice(
      refueling.liters,
      refueling.fuelPrice,
    );

    refuelingEntity.driver = driver;

    return this.refuelingRepository.save(refuelingEntity);
  }

  private calculateTotalPrice(liters: number, fuelPrice: number): number {
    return liters * fuelPrice;
  }
}
