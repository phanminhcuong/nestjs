import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    
@IsNotEmpty()
name:string;
@IsNotEmpty()
age:number;
@IsNotEmpty()
breed:string;

@IsNotEmpty()
breed1:string;

}
