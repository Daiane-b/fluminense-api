import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/users.dto';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }])
  ],
  exports: [UsersService],
  providers: [UsersService]
})
export class UsersModule {}
