import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService) { }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() user: any) {
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
