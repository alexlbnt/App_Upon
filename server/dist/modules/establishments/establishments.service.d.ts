export declare class EstablishmentsService {
    private establishments;
    findByCategory(categoryId: number): {
        id: number;
        categoryId: number;
        name: string;
        description: string;
        image: string;
        distance: string;
        isOpen: boolean;
        rating: number;
    }[];
    findOne(id: number): {
        id: number;
        categoryId: number;
        name: string;
        description: string;
        image: string;
        distance: string;
        isOpen: boolean;
        rating: number;
    };
}
