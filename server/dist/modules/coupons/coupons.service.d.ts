import { Repository } from 'typeorm';
import { Coupon } from './coupon.entity';
export declare class CouponsService {
    private readonly couponRepo;
    constructor(couponRepo: Repository<Coupon>);
    findAll(): Promise<Coupon[]>;
    findOne(id: string): Promise<Coupon>;
}
