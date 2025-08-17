import { IsArray, IsString, IsUUID, ValidateNested } from "class-validator";

export class RecipeDto
{
    @IsUUID()
    id!: string;

    @IsString()
    title!: string;

    @IsString()
    description!: string;

    @IsArray()
    ingredientIds!: string[];

    @IsString()
    instructions!: string;

    @ValidateNested()
    author!: any;  // TODO: DTO
    @IsString()
    authorId!: string;
}