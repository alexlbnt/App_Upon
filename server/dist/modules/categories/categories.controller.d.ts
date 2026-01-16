import { EstablishmentsService } from "../establishments/establishments.service";
export declare class CategoriesController {
    private readonly establishmentsService;
    constructor(establishmentsService: EstablishmentsService);
    findEstablishments(categoryId: string): Promise<import("../establishments/establishment.entity").Establishment[]>;
}
