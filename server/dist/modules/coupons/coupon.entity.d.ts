import { Establishment } from "../establishments/establishment.entity";
export declare class Coupon {
    id: string;
    title: string;
    discountType: string;
    discountValue: number;
    price: number;
    image: string;
    expiresAt: string;
    category: string;
    establishment: Establishment;
}
