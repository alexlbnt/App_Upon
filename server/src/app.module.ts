import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./database/typeorm.config";

import { CategoriesModule } from "./modules/categories/categories.module";
import { EstablishmentsModule } from "./modules/establishments/establishments.module";
import { CouponsModule } from "./modules/coupons/coupons.module";
import { UsersModule } from "./modules/users/users.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CategoriesModule,
    EstablishmentsModule,
    CouponsModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
