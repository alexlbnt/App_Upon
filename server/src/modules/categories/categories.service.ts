import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoriesService {
  private categories = [
    {
      id: 1,
      name: "Mercado",
      icon: "cart",
    },
    {
      id: 2,
      name: "Padaria",
      icon: "pizza",
    },
    {
      id: 3,
      name: "Farmácia",
      icon: "medkit",
    },
    {
      id: 4,
      name: "Restaurante",
      icon: "restaurant",
    },
  ];

  findAll() {
    return this.categories;
  }
}
