import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
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

  async findOne(id: string) {
    const driverFound = await this.driverRepository.findOne({
      where: {
        id,
      },
    });

    if (!driverFound) {
      throw new NotFoundException('Motorista não encontrado');
    }

    return driverFound;
  }

  async findAll(): Promise<DriverEntity[]> {
    return await this.driverRepository.find({
      select: {
        id: true,
        name: true,
        email: true,
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findAllWithRefuelings(): Promise<DriverEntity[]> {
    return await this.driverRepository.find({
      select: {
        name: true,
        refuelings: true,
      },
      relations: {
        refuelings: true,
      },
    });
  }

  async create(driver: DriverDTO): Promise<DriverEntity> {
    const driverEntity = new DriverEntity();
    driverEntity.name = driver.name;
    driverEntity.email = driver.email;

    return await this.driverRepository.save(driverEntity);
  }

  async update(id: string, driver: DriverDTO): Promise<DriverEntity> {
    await this.findOne(id);

    const driverEntity = new DriverEntity();
    driverEntity.id = id;
    driverEntity.name = driver.name;
    driverEntity.email = driver.email;

    return await this.driverRepository.save(driverEntity);
  }
}
