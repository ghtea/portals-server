import { Module } from '@nestjs/common';
import { UsersModule } from './../../users/users.module';
import { JwtAuthModule } from './../jwt/jwt.module';
import { GoogleAuthController } from './google.controller';
import { GoogleAuthService } from './google.service';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [UsersModule, JwtAuthModule],
  controllers: [GoogleAuthController],
  providers: [GoogleAuthService, GoogleStrategy],
})
export class GoogleAuthModule {}