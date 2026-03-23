import { Repository } from "typeorm";
import { Establishment } from "./establishment.entity";
export declare class EstablishmentsService {
    private readonly repo;
    constructor(repo: Repository<Establishment>);
    findAll(): Promise<Establishment[]>;
    findByCategory(categoryId: string): Promise<Establishment[]>;
    findOne(id: string): Promise<Establishment>;
}
