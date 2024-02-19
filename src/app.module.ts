import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BlogsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
