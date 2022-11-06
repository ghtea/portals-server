import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GoogleAuthGuard } from './google.guard';
import { GoogleAuthService } from './google.service';

@Controller('auth/google')
export class GoogleAuthController {
  constructor(private googleAuthService: GoogleAuthService) {}

  @Get()
  @UseGuards(GoogleAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  async googleAuth(@Req() req) {}

  @Get('callback')
  @UseGuards(GoogleAuthGuard)
  googleAuthCallback(@Req() req: Request, @Res() res: Response) {
    return this.googleAuthService.googleAuthCallback(req, res);
  }
}