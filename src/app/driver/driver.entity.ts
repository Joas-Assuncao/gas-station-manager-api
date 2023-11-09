import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { RefuelingEntity } from '../refueling/refueling.entity';

@Entity({ name: 'driver' })
export class DriverEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => RefuelingEntity, (refueling) => refueling.driver, {
    cascade: true,
  })
  refuelings: RefuelingEntity[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
