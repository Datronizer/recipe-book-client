import { RecipeDto } from "@/utils/dtos/Recipe.dto";
import { Text } from "react-native";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

function RecipeCard(props: {
    recipe: RecipeDto
})
{
    const { recipe } = props;

    return (
        <Card>
            <CardHeader>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.author}</CardDescription>
            </CardHeader>
            <CardContent>
                
                {/* <Image source={{ uri: recipe.imageUrl }} /> */}
                <Text>{recipe.title}</Text>
                <Text>{recipe.description}</Text>
            </CardContent>
        </Card>
    );
}

export { RecipeCard };
