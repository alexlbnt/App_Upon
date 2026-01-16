import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoriesService {
  findAll() {
    return [
      { id: 1, name: "Mercado", icon: "cart" },
      { id: 2, name: "Padaria", icon: "restaurant" },
      { id: 3, name: "Farmácia", icon: "medkit" },
    ];
  }
}
