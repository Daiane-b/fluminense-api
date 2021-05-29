import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/users.dto';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }])
  ],
  exports: [UsersService],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
