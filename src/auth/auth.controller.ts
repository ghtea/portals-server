import { Controller, Get, Post, UseGuards, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { RequestWithUser } from './RequestWithUser';
import { JwtRefreshGuard } from './jwt/jwt-refresh.guard';
import { JwtAuthGuard } from './jwt/jwt.guard';

import { JwtAuthService } from './jwt/jwt.service';
@Controller('auth')
export class AuthController {
  constructor(private readonly jwtAuthService: JwtAuthService) {}

  // WIP:
  @Get('protected')
  @UseGuards(JwtAuthGuard)
  protectedResource(@Req() req: RequestWithUser)
  {
    console.log(req.user)
    return 'JWT is working!';
  }

  @Post('refresh')
  @UseGuards(JwtRefreshGuard)
  refresh(@Req() req: RequestWithUser, @Res() res: Response) {
    const accessToken = this.jwtAuthService.signAccessToken(req.user);
    const refreshToken = this.jwtAuthService.signRefreshToken(req.user);

    res.cookie('access_token', accessToken, { // WIP:
      httpOnly: true,
      sameSite: 'lax',
    });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
    });

    res.statusCode = 200;
    res.end()
  }
}
