import { Repository } from "typeorm";
import { Establishment } from "./establishment.entity";
export declare class EstablishmentsService {
    private readonly repository;
    constructor(repository: Repository<Establishment>);
    findByCategory(categoryId: string): Promise<Establishment[]>;
    findOne(id: string): Promise<Establishment>;
}
