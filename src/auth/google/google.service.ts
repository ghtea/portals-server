import { Injectable, Res, Req } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtAuthService } from '../jwt/jwt.service';
import { GoogleUser } from './google.strategy';

@Injectable()
export class GoogleAuthService {
  constructor(
    private usersService: UsersService,
    private jwtAuthService: JwtAuthService
  ) {}

  async googleAuthCallback(@Req() req, @Res() res) {
    const googleUser = req.user as GoogleUser | undefined

    const handleFailure = ()=>{
      return res.redirect(`${process.env.CLIENT_HOST}/auth/failure`);
    }

    const handleSuccess = (user: UserEntity) => {
      const accessToken = this.jwtAuthService.signAccessToken(user);
      const refreshToken = this.jwtAuthService.signRefreshToken(user);

      res.cookie('access_token', accessToken, {
        httpOnly: true,
        sameSite: 'lax',
      });
      res.cookie('refresh_token', refreshToken, {
        httpOnly: true,
        sameSite: 'lax',
      });
      return res.redirect(`${process.env.CLIENT_HOST}/auth/success`);
    }

    if (!googleUser){
      return handleFailure()
    }

    try {
      const user = await this.usersService.findByGoogleId(googleUser.id)
      if (user){
        return handleSuccess(user)
      }

      const newUser = await this.usersService.create({
        googleId: googleUser.id,
        name: googleUser.name,
        email: googleUser.email,
        picture: googleUser.picture,
      })

      return handleSuccess(newUser)
    }
    catch(error) {
      console.log('error: ', error); // TODO: remove
      return handleFailure()
    }
  }
}