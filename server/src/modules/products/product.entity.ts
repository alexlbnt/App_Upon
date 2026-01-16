import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Establishment } from "../establishments/establishment.entity";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column("decimal")
  price: number;

  @Column({ default: 0 })
  discount: number;

  @ManyToOne(() => Establishment)
  @JoinColumn({ name: "establishment_id" })
  establishment: Establishment;
}
