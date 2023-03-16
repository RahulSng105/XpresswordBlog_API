import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { AuthResponse, LoginUserInput } from './dto/login-user.input';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver(of => User)
export class UsersResolver {
    constructor (private usersService: UsersService){}

    @Mutation(() => User,{name: "createUser"})
    register(@Args('userInput') user:CreateUserInput): Promise<User>
    {
        return this.usersService.register(user);
    }
    
    @Query(() => [User] , {name:"getAllUsers"})
    users(): Promise<User[]>
    {
        return this.usersService.findAll();
    }

    @Query(() => User, { name: 'getUser' })
    findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
    }

    @Mutation(() => AuthResponse, { name: 'loginUser' })
    login(@Args('LoginInput') loginInput: LoginUserInput) {
    return this.usersService.login(loginInput);
    }

   
}
