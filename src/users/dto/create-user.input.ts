import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {

    @Field({nullable:true})
    fullName: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field({nullable:true})
    token:string;

    @Field({nullable:true})
    firstName: string;

    @Field({nullable:true})
    lastName: string;
}