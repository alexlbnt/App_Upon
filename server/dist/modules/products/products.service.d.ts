import { Repository } from "typeorm";
import { Product } from "./product.entity";
export declare class ProductsService {
    private readonly repository;
    constructor(repository: Repository<Product>);
    findByEstablishment(establishmentId: string): Promise<Product[]>;
}
