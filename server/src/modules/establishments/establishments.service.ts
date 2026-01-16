import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Establishment } from "./establishment.entity";

@Injectable()
export class EstablishmentsService {
  constructor(
    @InjectRepository(Establishment)
    private readonly repository: Repository<Establishment>,
  ) {}

  findByCategory(categoryId: string) {
    return this.repository.find({
      where: {
        category: { id: categoryId },
      },
      relations: ["category"],
    });
  }

  findOne(id: string) {
    return this.repository.findOne({
      where: { id },
      relations: ["category"],
    });
  }
}
