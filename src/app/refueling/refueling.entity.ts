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
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  liters: number;

  @Column({ name: 'fuel_type', type: 'integer', nullable: false })
  fuelType: FuelType;

  @Column({
    name: 'fuel_price',
    type: 'decimal',
    nullable: false,
    precision: 10,
    scale: 2,
  })
  fuelPrice: number;

  @Column({
    name: 'total_price',
    type: 'decimal',
    nullable: false,
    precision: 10,
    scale: 2,
  })
  totalPrice: number;

  @CreateDateColumn({
    name: 'refueling_date',
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  refuelingDate: string;

  @ManyToOne(() => DriverEntity, (driver) => driver.refuelings, {
    onDelete: 'CASCADE',
  })
  driver?: DriverEntity;
}
