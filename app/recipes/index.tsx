import { RecipeCard } from "@/components/prefabs/RecipeCard";
import { RecipeDto } from "@/utils/dtos/Recipe.dto";
import { get } from "@/utils/server/Server";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function RecipesList()
{
    const router = useRouter();
    const [recipes, setRecipes] = useState<RecipeDto[]>([]);

    useEffect(() =>
    {
        const getRecipes = async () =>
        {
            const res = await get(new URL("http://localhost:3000/recipe/"));
            console.log(res);
            setRecipes(res);
        };

        getRecipes();

    }, []);

    return (
        <View >
            <Button title="Create Recipe" onPress={() => router.navigate("/recipes/add")} />
            <Text>Recipes List</Text>
            {
                recipes.map(e =>
                    <RecipeCard key={e.id} recipe={e} />
                )
            }
        </View>
    );
}