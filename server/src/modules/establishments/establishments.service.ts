import { Injectable } from "@nestjs/common";

@Injectable()
export class EstablishmentsService {
  private establishments = [
    {
      id: 1,
      categoryId: 1,
      name: "Supermercado Bom Preço",
      description: "Os melhores preços da cidade",
      image:
        "https://images.unsplash.com/photo-1580910051074-7b26f8c4e1f4",
      distance: "1.2 km",
      isOpen: true,
      rating: 4.5,
    },
    {
      id: 2,
      categoryId: 1,
      name: "Mercado Central",
      description: "Variedade e qualidade",
      image:
        "https://images.unsplash.com/photo-1601600576337-c1d8a0d13747",
      distance: "2.8 km",
      isOpen: false,
      rating: 4.2,
    },
    {
      id: 3,
      categoryId: 2,
      name: "Padaria Pão Quente",
      description: "Pães frescos todos os dias",
      image:
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
      distance: "900 m",
      isOpen: true,
      rating: 4.8,
    },
  ];

  findByCategory(categoryId: number) {
    return this.establishments.filter(
      (e) => e.categoryId === Number(categoryId)
    );
  }

  findOne(id: number) {
    return this.establishments.find((e) => e.id === Number(id));
  }
}
