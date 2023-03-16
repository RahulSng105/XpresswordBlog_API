import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateBlogInput {

    @Field()
    slug: string;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field({nullable:true})
    author: string;     

    @Field({nullable:true})
    created_date: string; 

    @Field()
    meta_title: string; 

    @Field()
    meta_description: string; 
    
}