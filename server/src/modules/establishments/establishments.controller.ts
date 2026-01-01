@Controller("establishments")
export class EstablishmentsController {
  constructor(private readonly service: EstablishmentsService) {}

  @Get("by-category/:categoryId")
  findByCategory(@Param("categoryId") id: number) {
    return this.service.findByCategory(id);
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.service.findOne(id);
  }
}
