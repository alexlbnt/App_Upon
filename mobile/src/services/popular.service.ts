type PopularProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  establishmentId: number;
  establishmentName: string;
};

export async function getPopularProducts(): Promise<PopularProduct[]> {
  // Simula delay de API
  await new Promise((resolve) => setTimeout(resolve, 400));

  return [
    {
      id: 1,
      name: "Peito de Frango",
      price: 12.9,
      image:
        "https://images.unsplash.com/photo-1604908554168-3b2a1c4e0c4f",
      establishmentId: 10,
      establishmentName: "Mercado do Zé",
    },
    {
      id: 2,
      name: "Refrigerante 2L",
      price: 7.49,
      image:
        "https://images.unsplash.com/photo-1622484212603-3f2c9b0b5c36",
      establishmentId: 10,
      establishmentName: "Mercado do Zé",
    },
    {
      id: 3,
      name: "Detergente",
      price: 2.99,
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
      establishmentId: 22,
      establishmentName: "Super Limpo",
    },
    {
      id: 4,
      name: "Pão Francês",
      price: 0.79,
      image:
        "https://images.unsplash.com/photo-1608198093002-de0f2b3c6c6e",
      establishmentId: 30,
      establishmentName: "Padaria Central",
    },
  ];
}
