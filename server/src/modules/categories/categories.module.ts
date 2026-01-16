import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./category.entity";
import { CategoriesController } from "./categories.controller";
import { EstablishmentsModule } from "../establishments/establishments.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    EstablishmentsModule,
  ],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
