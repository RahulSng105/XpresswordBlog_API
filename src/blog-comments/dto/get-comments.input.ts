import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class GetCommentInput {

    @Field()
    blogID: string;

}
