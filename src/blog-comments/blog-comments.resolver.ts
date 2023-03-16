import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlogsComments } from './blog-comments.entity';
import { BlogCommentsService } from './blog-comments.service';
import { CreateCommentInput } from './dto/create-comments.input';
import { GetCommentInput } from './dto/get-comments.input';

@Resolver()
export class BlogCommentsResolver {

    constructor (private blogsCommentService: BlogCommentsService){}

    @Query(() => [BlogsComments] , {name:"getAllBlogComments"})
    async users(): Promise<BlogsComments[]>
    {
        // console.log(await this.blogsService.findAll());
        return this.blogsCommentService.findAll();
    }


    @Mutation(() => [BlogsComments] , { name: 'getComments' })
    async findOne(@Args('getCommentsInput') input: GetCommentInput): Promise<BlogsComments[]>
    {
        return await this.blogsCommentService.findOne(input);
    }

    @Mutation(() => BlogsComments,{name: "createComment"})
    createBlog(@Args('commentInput') user:CreateCommentInput): Promise<BlogsComments>
    {
        return this.blogsCommentService.createComment(user);
    }

}
