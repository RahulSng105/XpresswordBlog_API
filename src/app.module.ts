import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { BlogCommentsModule } from './blog-comments/blog-comments.module';

@Module({
  imports: [ GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(),'src/schema.gql'),
    driver: ApolloDriver
  }),
  TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost', 
    port:5432,
    username:'postgres',
    password:'8010',
    database:'Xpressword_Blog' ,
    entities:["dist/**/*.entity{.ts,.js}"],
    synchronize:true,
  }) ,
  UsersModule,
  BlogsModule,
  BlogCommentsModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
