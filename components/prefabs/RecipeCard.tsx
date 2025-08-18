import { RecipeDto } from "@/utils/dtos/Recipe.dto";
import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

function RecipeCard(props: {
    recipe: RecipeDto
})
{
    const { recipe } = props;
    const router = useRouter();

    return (
        <Pressable
            onPress={() => router.navigate(`/recipes/${recipe.id}`)}>
            <Card>
                <CardHeader>
                    <CardTitle>{recipe.title}</CardTitle>
                    <CardDescription>By {recipe.author}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Text>{recipe.description}</Text>
                    {/* <Image source={{ uri: recipe.imageUrl }} /> */}
                </CardContent>
            </Card>
        </Pressable>
    );
}

export { RecipeCard };
