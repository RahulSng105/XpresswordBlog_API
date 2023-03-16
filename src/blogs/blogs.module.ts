import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsResolver } from './blogs.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blogs } from './blogs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blogs])],
  providers: [BlogsService, BlogsResolver]
})
export class BlogsModule {}
