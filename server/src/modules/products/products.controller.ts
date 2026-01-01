@Controller("products")
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get("by-establishment/:id")
  findByEstablishment(@Param("id") id: number) {
    return this.service.findByEstablishment(id);
  }
}
