import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { DriverEntity } from '../driver/driver.entity';
import { FuelType } from './enum/FuelType.enum';

@Entity({ name: 'fueling_records' })
export class RefuelingEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  liters: number;

  @Column({ name: 'fuel_type', type: 'integer' })
  fuelType: FuelType;

  @Column({ name: 'total_price', type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number;

  @CreateDateColumn({
    name: 'refueling_date',
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  refuelingDate: Date;

  @ManyToOne(() => DriverEntity, (driver) => driver.refuelings)
  driver: DriverEntity;
}
