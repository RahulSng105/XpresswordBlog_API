import { Module } from '@nestjs/common';
import { BlogCommentsService } from './blog-comments.service';
import { BlogCommentsResolver } from './blog-comments.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsComments } from './blog-comments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogsComments])],
  providers: [BlogCommentsService, BlogCommentsResolver]
})
export class BlogCommentsModule {}
