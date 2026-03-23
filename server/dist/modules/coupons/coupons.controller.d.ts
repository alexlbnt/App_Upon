import { CouponsService } from './coupons.service';
export declare class CouponsController {
    private readonly couponsService;
    constructor(couponsService: CouponsService);
    findAll(): Promise<import("./coupon.entity").Coupon[]>;
    findOne(id: string): Promise<import("./coupon.entity").Coupon>;
}
