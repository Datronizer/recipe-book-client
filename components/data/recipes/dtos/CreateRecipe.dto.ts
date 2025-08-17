import { IsArray, IsOptional, IsString } from "class-validator";

export class CreateRecipeDto
{
    @IsString()
    title!: string;

    @IsString()
    description!: string;

    @IsArray()
    @IsOptional()
    ingredientIds!: string[];

    @IsString()
    instructions!: string;


    // constructor(partial: Partial<CreateRecipeDto>)
    // {
        
    //     Object.assign(this, partial);
    // }

    // public from(body: CreateRecipeDto): CreateRecipeDto
    // {
    //     return instanceToPlain(CreateRecipeDto, body);
    // }
}
