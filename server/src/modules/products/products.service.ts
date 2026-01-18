import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      establishmentId: 1,
      name: "Arroz 5kg",
      description: "Arroz tipo 1",
      price: 22.9,
      image:
        "https://images.unsplash.com/photo-1604908554166-29e95dbb59fd",
    },
    {
      id: 2,
      establishmentId: 1,
      name: "Feijão Carioca",
      description: "Feijão selecionado",
      price: 8.5,
      image:
        "https://images.unsplash.com/photo-1615484477201-9f4953340fab",
    },
    {
      id: 3,
      establishmentId: 2,
      name: "Pão Francês",
      description: "Pão quentinho",
      price: 0.6,
      image:
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
    },
  ];

  findByEstablishment(establishmentId: number) {
    return this.products.filter(
      (p) => p.establishmentId === Number(establishmentId)
    );
  }
}
