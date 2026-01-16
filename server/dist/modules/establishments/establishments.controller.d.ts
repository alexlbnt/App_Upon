import { EstablishmentsService } from "./establishments.service";
export declare class EstablishmentsController {
    private readonly service;
    constructor(service: EstablishmentsService);
    findByCategory(categoryId: string): Promise<import("./establishment.entity").Establishment[]>;
    findOne(id: string): Promise<import("./establishment.entity").Establishment>;
}
