import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { AuthCredentialsDto } from './dto/auth-credentials';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }
}
