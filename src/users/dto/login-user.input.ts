import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { User } from "../user.entity";

@InputType()
export class LoginUserInput {

    @Field()
    email: string;

    @Field()
    password: string;
}


@ObjectType()
export class AuthResponse {
    @Field()
    token: string;
    @Field()
    user?: User;
    @Field()
    status?: string;
}