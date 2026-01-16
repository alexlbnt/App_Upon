import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Category } from "../categories/category.entity";

@Entity("establishments")
export class Establishment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  logo: string;

  @Column({ default: 0 })
  rating: number;

  @Column()
  deliveryTime: string;

  @ManyToOne(() => Category, category => category.establishments)
  @JoinColumn({ name: "category_id" })
  category: Category;
}
