import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './interfaces/users.interface'

@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private readonly model: Model<Users>) { }
    
    async findOne(username: string): Promise<Users | undefined> {
        return this.model.findOne({ username })
    }
}