import { Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common';
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

  async findOneByEmail(email: string) {
    const driverFound = await this.driverRepository.findOne({
      where: {
        email,
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
    const driverFound = await this.driverRepository.findOne({
      where: {
        email: driver.email,
      },
    });

    if (driverFound) {
      throw new BadRequestException('Motorista já cadastrado');
    }

    const driverEntity = new DriverEntity();
    driverEntity.name = driver.name;
    driverEntity.email = driver.email;

    const driverCreated = await this.driverRepository.save(driverEntity);
    console.log(driverCreated);

    return driverCreated;
  }

  async update(id: string, driver: DriverDTO): Promise<DriverEntity> {
    const [driverFoundById, driverFoundByEmail] = await Promise.all([
      this.findOne(id),
      this.findOneByEmail(driver.email),
    ]);

    if (driverFoundById.id !== driverFoundByEmail.id) {
      throw new BadRequestException('E-mail já cadastrado');
    }

    const driverEntity = new DriverEntity();
    driverEntity.id = id;
    driverEntity.name = driver.name;
    driverEntity.email = driver.email;

    return await this.driverRepository.save(driverEntity);
  }
}
