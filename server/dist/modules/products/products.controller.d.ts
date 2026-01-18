import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly service;
    constructor(service: ProductsService);
    findByEstablishment(id: number): {
        id: number;
        establishmentId: number;
        name: string;
        description: string;
        price: number;
        image: string;
    }[];
}
