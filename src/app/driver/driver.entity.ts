import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RefuelingEntity } from '../refueling/refueling.entity';

@Entity({ name: 'driver' })
export class DriverEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => RefuelingEntity, (refueling) => refueling.driver)
  refuelings: RefuelingEntity[];
}
