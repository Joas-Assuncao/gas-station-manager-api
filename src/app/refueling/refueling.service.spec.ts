import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverEntity } from '../driver/driver.entity';

import { DriverService } from '../driver/driver.service';
import { RefuelingDTO } from './refueling.dto';
import { RefuelingEntity } from './refueling.entity';
import { RefuelingService } from './refueling.service';

describe('RefuelingService', () => {
  let refuelingService: RefuelingService;
  let refuelingRepository: Repository<RefuelingEntity>;
  let driverRepository: Repository<DriverEntity>;
  let driverService: DriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RefuelingService,
        DriverService,
        {
          provide: getRepositoryToken(RefuelingEntity),
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(DriverEntity),
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    driverService = module.get<DriverService>(DriverService);
    driverRepository = module.get<Repository<DriverEntity>>(
      getRepositoryToken(DriverEntity),
    );

    refuelingService = module.get<RefuelingService>(RefuelingService);
    refuelingRepository = module.get<Repository<RefuelingEntity>>(
      getRepositoryToken(RefuelingEntity),
    );
  });

  it('should be defined', () => {
    expect(driverService).toBeDefined();
    expect(driverRepository).toBeDefined();
    expect(refuelingService).toBeDefined();
    expect(refuelingRepository).toBeDefined();
  });

  describe('find all refuelings', () => {
    it('should return an array of refuelings', async () => {
      const refuelingEntity: RefuelingEntity = {
        id: '76044b6d-55a7-4efc-8a4b-17694f21245d',
        liters: 15.7,
        fuelType: 2,
        fuelPrice: 5.6,
        totalPrice: 87.92,
        refuelingDate: '2023-11-10T03:58:34.559Z',
      };

      const refuelings: RefuelingEntity[] = [refuelingEntity];

      jest.spyOn(refuelingRepository, 'find').mockResolvedValue(refuelings);

      expect(
        await refuelingService.findAllById(
          '91f9fe92-f1b5-460e-92b3-719c584d54db',
        ),
      ).toEqual(refuelings);
    });
  });

  describe('create refueling', () => {
    it('should return an error if the driver does not exist', async () => {
      const refueling: RefuelingDTO = {
        liters: 15.7,
        fuelType: 2,
        fuelPrice: 5.6,
      };

      expect(refuelingService.create('1', refueling)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should create a refueling with success', async () => {
      const refueling: RefuelingDTO = {
        liters: 15.7,
        fuelType: 2,
        fuelPrice: 5.6,
      };

      const driverEntity: DriverEntity = {
        id: '91f9fe92-f1b5-460e-92b3-719c584d54db',
        name: 'Elayne',
        email: 'elayne@gmail.com',
        createdAt: '2023-11-10T06:14:52.769Z',
        refuelings: [],
      };

      const refuelingEntity: RefuelingEntity = {
        id: '76044b6d-55a7-4efc-8a4b-17694f21245d',
        liters: 15.7,
        fuelType: 2,
        fuelPrice: 5.6,
        totalPrice: 87.92,
        refuelingDate: '2023-11-10T03:58:34.559Z',
        driver: driverEntity,
      };

      jest.spyOn(driverRepository, 'findOne').mockResolvedValue(driverEntity);
      jest
        .spyOn(refuelingRepository, 'save')
        .mockResolvedValue(refuelingEntity);

      expect(
        await refuelingService.create(
          '91f9fe92-f1b5-460e-92b3-719c584d54db',
          refueling,
        ),
      ).toEqual(refuelingEntity);
    });
  });
});
