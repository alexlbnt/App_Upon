import { Controller, Get, Param } from "@nestjs/common";
import { EstablishmentsService } from "./establishments.service";

@Controller("establishments")
export class EstablishmentsController {
  constructor(private readonly service: EstablishmentsService) {}

  @Get("by-category/:categoryId")
  findByCategory(@Param("categoryId") categoryId: number) {
    return this.service.findByCategory(categoryId);
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.service.findOne(id);
  }
}
