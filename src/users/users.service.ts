import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generateToken } from './../utils/jwt.utils';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { AuthResponse, LoginUserInput } from './dto/login-user.input';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    
    async register(input:CreateUserInput): Promise<User>{

        Object.assign(input, {'token': generateToken()})

        input.fullName = input.firstName+" "+input.lastName;
        let new_user = this.userRepository.create(input);
        return this.userRepository.save(new_user);
    }

    async findAll(): Promise<User[]>{
        var user = this.userRepository.find();
        return user;
    }

    async findOne(id: string) : Promise<User> {
        let user = this.userRepository.findOne({where:{id:id}});
        console.log(user)
        return user;
    }

    async login(loginInput: LoginUserInput ){

        console.log("INSIDE LOGIN")
        let user =await this.userRepository.findOne({where:{email:loginInput.email}});
        
        var genTok = generateToken()

        if(user){
           var passwordIsValid = (loginInput.password == user.password) ? true : false;

           if(!passwordIsValid){
            user.firstName = ""
            user.lastName=""
            user.fullName=""
            user.email=""
            user.password=""
            user.id = ""
            user.token = ""
            user.contactNumber = ""
            
            return{
                token: " ",
                status:"Invalid Password",
                user:user
            }
           }

           else{
            var newValues = {
                token: genTok,
            }
            await this.userRepository.update(user.id,newValues)

            return{
                token: genTok,
                user:user,
                status:"Success"
            }
           }
        }
    
        else{
            let user1 = {
                firstName : "",
                lastName : "",
                fullName : "",
                email : "",
                password : "",
                id : "",
                token : "",
                contactNumber : "",
            }
            return{
                token:" ",
                status:"User Not Found",
                user:user1
            }
        }
    }
}
