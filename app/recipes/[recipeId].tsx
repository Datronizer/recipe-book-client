import { LoadingScreenWithBlocker } from "@/components/prefabs/LoadingScreenWithBlocker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RecipeDto } from "@/utils/dtos/Recipe.dto";
import { get } from "@/utils/server/Server";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function RecipeDetails()
{
    const { recipeId } = useLocalSearchParams<{ recipeId: string }>()
    const [recipe, setRecipe] = useState<RecipeDto>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>
    {
        const getRecipe = async () =>
        {
            setIsLoading(true);

            const recipe = await get(new URL(`http://localhost:3000/recipe/${recipeId}`))
            setRecipe(recipe);

            if (recipe)
            {
                setIsLoading(false);
            }
        }

        getRecipe();
    }, [])


    if (isLoading) return <LoadingScreenWithBlocker children={undefined} />
    if (!recipe) return null;

    return (
        <View>
            <Card>
                <CardHeader>
                    <CardTitle>{recipe.title}</CardTitle>
                    <CardDescription>{recipe.author}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Text>{recipe.description}</Text>
                    <Text>{recipe.instructions}</Text>
                </CardContent>
            </Card>
        </View>
    );
}