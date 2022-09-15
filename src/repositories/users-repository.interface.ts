import { BaseRepository } from './base-repository.interface';
import { User } from '../interfaces/user.interface';

export interface UserRepository extends BaseRepository<User> {
   findUserByFirstName(name: string): User;
}