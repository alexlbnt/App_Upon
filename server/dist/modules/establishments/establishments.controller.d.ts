import { EstablishmentsService } from "./establishments.service";
export declare class EstablishmentsController {
    private readonly service;
    constructor(service: EstablishmentsService);
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
