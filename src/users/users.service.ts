import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsersDTO } from './dto/create-users.dto';
import { Users } from './interfaces/users.interface'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private readonly model: Model<Users>) { }
    
    async findOne(email: string): Promise<Users | undefined> {
        return this.model.findOne({ email })
    }

    async create(user: CreateUsersDTO): Promise<Users>{
        const saltOrRounds = 10;
        const newUser = new this.model(user);
        const password = newUser.password;
        newUser.password = await bcrypt.hash(password, saltOrRounds)
        return newUser.save();
    }
}