import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Category } from "../categories/category.entity";
import { Coupon } from "../coupons/coupon.entity";

@Entity("establishments")
export class Establishment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ nullable: true })
  image: string;

  @Column("decimal", { precision: 2, scale: 1, default: 0 })
  rating: number;

  @Column({ default: false })
  isOpen: boolean;

  @Column({ nullable: true })
  distance: string;

  @ManyToOne(() => Category, category => category.establishments)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @OneToMany(() => Coupon, coupon => coupon.establishment)
  coupons: Coupon[];
}
