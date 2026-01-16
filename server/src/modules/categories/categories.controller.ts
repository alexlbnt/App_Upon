import { Controller, Get, Param } from "@nestjs/common";
import { EstablishmentsService } from "../establishments/establishments.service";

@Controller("categories")
export class CategoriesController {
  constructor(
    private readonly establishmentsService: EstablishmentsService,
  ) {}

  @Get(":categoryId/establishments")
  findEstablishments(@Param("categoryId") categoryId: string) {
    return this.establishmentsService.findByCategory(categoryId);
  }
}
