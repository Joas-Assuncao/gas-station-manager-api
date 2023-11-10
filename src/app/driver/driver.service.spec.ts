import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';

import { DriverService } from './driver.service';
import { DriverEntity } from './driver.entity';
import { DriverDTO } from './driver.dto';

describe('DriverService', () => {
  let driverService: DriverService;
  let driverRepository: Repository<DriverEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DriverService,
        {
          provide: getRepositoryToken(DriverEntity),
          useValue: {
            findOne: jest.fn(),
            findOneByEmail: jest.fn(),
            find: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    driverService = module.get<DriverService>(DriverService);
    driverRepository = module.get<Repository<DriverEntity>>(
      getRepositoryToken(DriverEntity),
    );
  });

  it('should be defined', () => {
    expect(driverService).toBeDefined();
    expect(driverRepository).toBeDefined();
  });

  describe('create driver', () => {
    it('should return an error if the email exists', async () => {
      const driverDTO: DriverDTO = {
        name: 'John Doe',
        email: 'johndoe@example.com',
      };

      const existingDriver: DriverEntity = {
        id: '1',
        name: 'Qualquer',
        email: 'johndoe@example.com',
        createdAt: new Date().toISOString(),
        refuelings: [],
      };

      jest.spyOn(driverRepository, 'findOne').mockResolvedValue(existingDriver);

      await expect(driverService.create(driverDTO)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should create a driver with success', async () => {
      const driverDTO: DriverDTO = {
        name: 'Kauan',
        email: 'kauan@mail.co',
      };

      const driverCreated: DriverEntity = {
        id: '1',
        name: 'Kauan',
        email: 'kauan@gmail.com',
        createdAt: new Date().toISOString(),
        refuelings: [],
      };

      jest.spyOn(driverRepository, 'findOne').mockResolvedValue(undefined);
      jest.spyOn(driverRepository, 'save').mockResolvedValue(driverCreated);

      const driver = await driverService.create(driverDTO);

      expect(driver).toEqual(driverCreated);
    });
  });

  describe('find all drivers', () => {
    it('should return an array of drivers', async () => {
      const drivers: DriverEntity[] = [
        {
          id: '7b669c76-e34e-4d3c-b9f9-3a6389d1a0e5',
          name: 'Anny Reis',
          email: 'anny@reis.com',
        },
        {
          id: 'b87ae935-bd5c-4451-a9cf-8dc4b569d322',
          name: 'Juliane Xavier',
          email: 'juliane@gmail.com',
        },
        {
          id: '91f9fe92-f1b5-460e-92b3-719c584d54db',
          name: 'Elayne',
          email: 'elayne@gmail.com',
        },
        {
          id: 'd1469330-0850-4e9f-9da3-1a02ee9386b3',
          name: 'joas',
          email: 'joas@gmail.com',
        },
        {
          id: '340ce5b4-37dd-4874-8c80-b376504cd41c',
          name: 'motorisca',
          email: 'motorisca@gmail.com',
        },
      ];

      jest.spyOn(driverRepository, 'find').mockResolvedValue(drivers);

      const result = await driverService.findAll();

      expect(result).toEqual(drivers);
    });
  });

  describe('find one driver', () => {
    it('should return a driver', async () => {
      const driver: DriverEntity = {
        id: '7b669c76-e34e-4d3c-b9f9-3a6389d1a0e5',
        name: 'Anny Reis',
        email: 'anny@reis.com',
      };

      jest.spyOn(driverRepository, 'findOne').mockResolvedValue(driver);

      const result = await driverService.findOne(
        '7b669c76-e34e-4d3c-b9f9-3a6389d1a0e5',
      );

      expect(result).toEqual(driver);
    });
  });

  describe('update driver', () => {
    it('should return an error of the email is in use', async () => {
      const id = 'b87ae935-bd5c-4451-a9cf-8dc4b569d322';

      const driverDTO = {
        name: 'Juliane Xavier',
        email: 'juliane@gmail.com',
      };

      const existingDriverById: DriverEntity = {
        id: 'b87ae935-bd5c-4451-a9cf-8dc4b569d322',
        name: 'Juliane Xavier',
        email: 'juliane@gmail.com',
      };

      const existingDriverByEmail: DriverEntity = {
        id: '7b669c76-e34e-4d3c-b9f9-3a6389d1a0e5',
        name: 'Anny Reis',
        email: 'anny@reis.com',
      };

      jest
        .spyOn(driverService, 'findOne')
        .mockResolvedValue(existingDriverById);

      jest
        .spyOn(driverService, 'findOneByEmail')
        .mockResolvedValue(existingDriverByEmail);

      await expect(driverService.update(id, driverDTO)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should return an error if driver not exists', async () => {
      const id = '7b669c76-e34e-4d3c-b9f9-3a6389d1a0e4';
      const driverDTO: DriverDTO = {
        name: 'Joás',
        email: 'joassalvior@gmail.com',
      };

      await expect(driverService.update(id, driverDTO)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
