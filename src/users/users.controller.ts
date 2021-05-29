import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUsersDTO } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('/')
    async create(@Res() res, @Body() body: CreateUsersDTO) {
        const user = await this.userService.create(body)
        return res.status(HttpStatus.CREATED).json(user)
    }
}
