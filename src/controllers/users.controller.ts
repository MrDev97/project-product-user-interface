import { User } from '../interfaces/user.interface';
import { UserRepository } from '../repositories/users-repository.interface';
import BaseController from './base-controller';


export class UserController extends BaseController<User> {
    constructor(private usersRepository: UserRepository) {
        super(usersRepository);
    }
 
    findUserByFirstName(name: string): User {
        return this.usersRepository.findUserByFirstName(name);
    }
 }