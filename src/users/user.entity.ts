import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Field({nullable:true})
    @Column({nullable:true})
    fullName: string;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    password: string;

    @Field({nullable:true})
    @Column({nullable:true})
    token:string;

    @Field({nullable:true})
    @Column({nullable:true})
    firstName: string;

    @Field({nullable:true})
    @Column({nullable:true})
    lastName: string;

    @Field({nullable:true})
    @Column({nullable:true})
    contactNumber: string;



}