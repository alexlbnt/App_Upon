import { CategoriesService } from "./categories.service";
export declare class CategoriesController {
    private readonly service;
    constructor(service: CategoriesService);
    findAll(): {
        id: number;
        name: string;
        icon: string;
    }[];
}
