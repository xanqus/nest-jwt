import { Repository } from 'typeorm';
import { User } from './user.entitiy';
export declare class AppService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(data: any): Promise<User>;
}
