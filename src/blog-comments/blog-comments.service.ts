import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetBlogInput } from 'src/blogs/dto/get-blog.input';
import { Repository } from 'typeorm';
import { BlogsComments } from './blog-comments.entity';
import { CreateCommentInput } from './dto/create-comments.input';
import { GetCommentInput } from './dto/get-comments.input';

@Injectable()
export class BlogCommentsService {

    constructor(@InjectRepository(BlogsComments) private blogCommentsRepository: Repository<BlogsComments>){}

    async findAll(): Promise<BlogsComments[]> {
        var comments = await this.blogCommentsRepository.find();
        return comments;
    }

    async findOne(input: GetCommentInput ) : Promise<BlogsComments[]> {
        let blog =await this.blogCommentsRepository.find({where:{blogID:input.blogID}});
        // console.log(blog)
        return blog;
    }


    async createComment(input:CreateCommentInput): Promise<BlogsComments>{


        var d = new Date();
        var daetTime = d.toJSON().slice(0,19).replace('T','  ')
        input.created_date = daetTime;

        let new_user = this.blogCommentsRepository.create(input);
        return this.blogCommentsRepository.save(new_user);
    }

}
