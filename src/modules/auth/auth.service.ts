import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const userExist = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userExist) {
      throw new BadRequestException('E-mail já está em uso.');
    }

    const hash = await bcrypt.hash(data.password, 12);

    const newUser = await this.userService.create({
      ...data,
      password: hash,
    });

    return {
      token: this.jwtService.sign({
        sub: newUser.id,
      }),
    };
  }

  async login(data: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (
      user &&
      user.password &&
      (await bcrypt.compare(data.password, user.password))
    ) {
      return {
        token: this.jwtService.sign({
          sub: user.id,
        }),
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      };
    }

    throw new UnauthorizedException();
  }
}
