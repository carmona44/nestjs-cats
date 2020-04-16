import { IsNotEmpty, IsString, IsOptional, IsNumber, IsEmail } from "class-validator";

export class CreateCatDto {
  @IsNotEmpty() @IsString()
  readonly name;

  @IsNotEmpty() @IsNumber()
  readonly age: number;

  @IsNotEmpty() @IsString()
  readonly breed: string;
  
}