import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private readonly repo;
    constructor(repo: Repository<User>);
    create(user: Partial<User>): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
}
