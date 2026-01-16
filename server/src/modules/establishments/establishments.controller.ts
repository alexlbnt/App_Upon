import { Controller, Get, Param } from "@nestjs/common";
import { EstablishmentsService } from "./establishments.service";

@Controller("establishments")
export class EstablishmentsController {
  constructor(private readonly service: EstablishmentsService) {}

  @Get("by-category/:categoryId")
  findByCategory(@Param("categoryId") categoryId: string) {
    return this.service.findByCategory(categoryId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.service.findOne(id);
  }
}
