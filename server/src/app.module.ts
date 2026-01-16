import { Module } from "@nestjs/common";
import { CategoriesModule } from "./modules/categories/categories.module";
import { EstablishmentsModule } from "./modules/establishments/establishments.module";
import { ProductsModule } from "./modules/products/products.module";

@Module({
  imports: [
    CategoriesModule,
    EstablishmentsModule,
    ProductsModule,
  ],
})
export class AppModule {}
