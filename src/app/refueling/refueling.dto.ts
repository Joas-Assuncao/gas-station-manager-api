import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';

import { FuelType } from './enum/FuelType.enum';

export class RefuelingDTO {
  @IsNotEmpty()
  @IsNumber()
  liters: number;

  @IsNotEmpty()
  @IsEnum(FuelType)
  fuelType: number;

  @IsNotEmpty()
  @IsNumber()
  fuelPrice: number;
}
