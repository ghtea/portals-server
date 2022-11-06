import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from './../../users/users.service';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class JwtAuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private configService: ConfigService,
  ) {}

  // WIP:
  // async updateRefreshToken(userId: string, refreshToken: string) {
  //   const hashedRefreshToken = await this.hashData(refreshToken);
  //   await this.usersService.update(userId, {
  //     refreshToken: hashedRefreshToken,
  //   });
  // }
  async validateUserId(userId: number): Promise<any> {
    console.log('validateUserId userId: ', userId); // TODO: remove
    const user = await this.usersService.findById(userId);

    if (!user) {
      throw new UnauthorizedException()
    }

    return user;
  }

  signAccessToken(user: UserEntity){
    const payload: JwtPayload = { userId: user.id };

    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_ACCESS_SECRET'),
      expiresIn: this.configService.get('JWT_ACCESS_EXPIRES')
    })
  }

  signRefreshToken(user: UserEntity){
    const payload: JwtPayload = { userId: user.id };

    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get('JWT_REFRESH_EXPIRES')
    })
  }
}