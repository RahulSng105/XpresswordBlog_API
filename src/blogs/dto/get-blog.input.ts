import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class GetBlogInput {

    @Field()
    slug: string;

}
