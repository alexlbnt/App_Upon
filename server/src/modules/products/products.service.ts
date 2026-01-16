import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  findByEstablishment(establishmentId: string) {
    return this.repository.find({
      where: {
        establishment: { id: establishmentId },
      },
    });
  }
}
