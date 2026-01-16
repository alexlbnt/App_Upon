import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly service;
    constructor(service: ProductsService);
    findByEstablishment(id: string): Promise<import("./product.entity").Product[]>;
}
