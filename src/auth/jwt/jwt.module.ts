import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt-access.strategy';
import { JwtRefreshStrategy } from './jwt-refresh.strategy';
import { JwtAuthService } from './jwt.service';

@Module({
  imports: [
    JwtModule.register({}), // WIP:
    UsersModule,
  ],
  providers: [JwtStrategy, JwtAuthService, JwtRefreshStrategy],
  exports: [JwtModule, JwtAuthService],
})
export class JwtAuthModule {}