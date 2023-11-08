import { IsNotEmpty, IsString } from 'class-validator';

export class DriverDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}
