import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { RefuelingDTO } from '../refueling/refueling.dto';

export class DriverDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  refueling: RefuelingDTO[];
}
