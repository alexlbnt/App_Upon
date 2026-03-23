import { Category } from "../categories/category.entity";
import { Coupon } from "../coupons/coupon.entity";
export declare class Establishment {
    id: string;
    name: string;
    description: string;
    logo: string;
    image: string;
    rating: number;
    isOpen: boolean;
    distance: string;
    category: Category;
    coupons: Coupon[];
}
