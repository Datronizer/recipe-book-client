import { CreateRecipeDto } from "@/components/data/recipes/dtos/CreateRecipe.dto";
import { post } from "@/utils/server/Server";
import { Button } from "react-native";

export default function AddRecipe()
{
    const addRecipe = async () =>
    {
        const recipe: CreateRecipeDto = {
            title: "Test Recipe",
            description: "This is a test recipe.",
            ingredientIds: [],
            instructions: "Mix all ingredients and bake."
        }

        const res = await post(new URL("http://localhost:3000/recipe"), { recipe });
        console.log(res);
    }

    return (
        <Button onPress={addRecipe} title={"Add Recipe"} />
    )
}