import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blogs } from './blogs.entity';
import { CreateBlogInput } from './dto/create-bog.input';
import { GetBlogInput } from './dto/get-blog.input';

@Injectable()
export class BlogsService {

    constructor(@InjectRepository(Blogs) private blogRepository: Repository<Blogs>){}


    async findAll(): Promise<Blogs[]> {
        var blog = await this.blogRepository.find();
        return blog;
    }

    async findOne(input: GetBlogInput) : Promise<Blogs> {
        let blog =await this.blogRepository.findOne({where:{slug:input.slug}});
        // console.log(blog)
        return blog;
    }

    async createBlog(input:CreateBlogInput): Promise<Blogs>{

        var moment = require('moment');
        moment().format('yyyy-mm-dd:hh:mm:ss');

        var d = new Date();
        var daetTime = d.toJSON().slice(0,19).replace('T',':')
        input.created_date = daetTime;

        let new_user = this.blogRepository.create(input);
        return this.blogRepository.save(new_user);
    }

}
