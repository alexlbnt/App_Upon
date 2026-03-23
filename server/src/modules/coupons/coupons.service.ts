import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coupon } from './coupon.entity';

@Injectable()
export class CouponsService {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponRepo: Repository<Coupon>,
  ) {}

  findAll() {
    return this.couponRepo.find({ relations: ['establishment'] });
  }

  findOne(id: string) {
    return this.couponRepo.findOne({ where: { id }, relations: ['establishment'] });
  }
}
