import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCommentInput {

    @Field({nullable:true})
    blogID: string;

    @Field({nullable:true})
    name: string;

    @Field({nullable:true})
    email: string;


    @Field({nullable:true})
    comment: string;


    @Field({nullable:true})
    created_date: string; 
    
}