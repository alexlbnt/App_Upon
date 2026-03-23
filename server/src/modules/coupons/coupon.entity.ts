import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Establishment } from "../establishments/establishment.entity";

@Entity("coupons")
export class Coupon {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  discountType: string;

  @Column("decimal", { precision: 10, scale: 2 })
  discountValue: number;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  image: string;

  @Column()
  expiresAt: string;

  @Column({ nullable: true })
  category: string; // Filter category inside the establishment

  @ManyToOne(() => Establishment, establishment => establishment.coupons)
  @JoinColumn({ name: "establishment_id" })
  establishment: Establishment;
}
