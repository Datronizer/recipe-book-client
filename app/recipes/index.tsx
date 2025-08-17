import { RecipeCard } from "@/components/prefabs/RecipeCard";
import { RecipeDto } from "@/utils/dtos/Recipe.dto";
import { get } from "@/utils/server/Server";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function RecipesList()
{
    const [recipes, setRecipes] = useState<RecipeDto[]>([])

    useEffect(() =>
    {
        const getRecipes = async () =>
        {
            const res = await get(new URL("http://localhost:3000/recipe/"));
            console.log(res);
            setRecipes(res);
        }

        getRecipes();

    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Recipes List</Text>
            {
                recipes.map(e =>
                    <RecipeCard key={e.id} recipe={e} />
                )
            }
        </View>
    );
}