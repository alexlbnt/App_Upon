import { Establishment } from "../establishments/establishment.entity";
export declare class Product {
    id: string;
    name: string;
    image: string;
    price: number;
    discount: number;
    establishment: Establishment;
}
