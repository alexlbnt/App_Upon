export declare class ProductsService {
    private products;
    findByEstablishment(establishmentId: number): {
        id: number;
        establishmentId: number;
        name: string;
        description: string;
        price: number;
        image: string;
    }[];
}
