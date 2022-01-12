import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { User } from './user.entitiy';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'nest_auth',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
