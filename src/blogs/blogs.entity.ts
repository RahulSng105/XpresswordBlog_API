import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Blogs{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Field()
    @Column({nullable:true})
    categories: string;

    @Field()
    @Column({nullable:true})
    slug: string;

    @Field()
    @Column({nullable:true})
    title: string;

    @Field()
    @Column({nullable:true})
    content: string;

    @Field()
    @Column({nullable:true})
    image: string;

    @Field()
    @Column({nullable:true})
    author: string;     

    @Field()
    @Column({nullable:true})
    created_date: string; 

    @Field()
    @Column({nullable:true})
    meta_title: string; 

    @Field()
    @Column({nullable:true})
    meta_description: string; 

    // @Field({nullable:true})
    // @Column({nullable:true})
    // formType: string;      


}