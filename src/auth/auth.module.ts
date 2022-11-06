import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { GoogleAuthModule } from './google/google.module';
import { JwtAuthModule } from './jwt/jwt.module';
@Module({
  imports: [
    UsersModule,
    PassportModule,
    GoogleAuthModule,
    JwtAuthModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
