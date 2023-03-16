import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Blogs } from './blogs.entity';
import { BlogsService } from './blogs.service';
import { CreateBlogInput } from './dto/create-bog.input';
import { GetBlogInput } from './dto/get-blog.input';

@Resolver()
export class BlogsResolver {
    
    constructor (private blogsService: BlogsService){}


    @Query(() => [Blogs] , {name:"getAllBlogs"})
    async users(): Promise<Blogs[]>
    {
        // console.log(await this.blogsService.findAll());
        return this.blogsService.findAll();
    }


    @Mutation(() => Blogs , { name: 'getBlog' })
    async findOne(@Args('getBlogInput') input: GetBlogInput) {
    return await this.blogsService.findOne(input);
    }

    @Mutation(() => Blogs,{name: "createBlog"})
    createBlog(@Args('blogInput') user:CreateBlogInput): Promise<Blogs>
    {
        return this.blogsService.createBlog(user);
    }


}
