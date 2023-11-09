import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class DriverDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
