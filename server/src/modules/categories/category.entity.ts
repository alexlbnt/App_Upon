import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Establishment } from "../establishments/establishment.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  icon: string;

  @Column({ nullable: true })
  color: string;

  @OneToMany(() => Establishment, establishment => establishment.category)
  establishments: Establishment[];
}
