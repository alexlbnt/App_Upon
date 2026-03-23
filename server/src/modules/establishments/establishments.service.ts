import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Establishment } from "./establishment.entity";

@Injectable()
export class EstablishmentsService {
  constructor(
    @InjectRepository(Establishment)
    private readonly repo: Repository<Establishment>
  ) {}

  findAll() {
    return this.repo.find({ relations: ["category", "coupons"] });
  }

  findByCategory(categoryId: string) {
    return this.repo.find({
      where: { category: { id: categoryId } },
      relations: ["category", "coupons"]
    });
  }

  findOne(id: string) {
    return this.repo.findOne({ where: { id }, relations: ["category", "coupons"] });
  }
}
