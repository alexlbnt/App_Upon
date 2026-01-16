import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Establishment } from "../establishments/establishment.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  icon: string;

  @OneToMany(() => Establishment, establishment => establishment.category)
  establishments: Establishment[];
}
