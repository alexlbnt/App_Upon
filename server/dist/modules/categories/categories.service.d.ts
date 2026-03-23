import { Repository } from 'typeorm';
import { Category } from './category.entity';
export declare class CategoriesService {
    private readonly repo;
    constructor(repo: Repository<Category>);
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
}
