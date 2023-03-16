import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class BlogsComments{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Field()
    @Column({nullable:true})
    blogID: string;

    @Field()
    @Column({nullable:true})
    name: string;

    @Field()
    @Column({nullable:true})
    email: string;


    @Field()
    @Column({nullable:true})
    comment: string;


    @Field()
    @Column({nullable:true})
    created_date: string; 



}