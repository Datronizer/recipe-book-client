import { get } from "@/utils/server/Server";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

export default function IngredientsList()
{
    const router = useRouter();
    const [ingredients, setIngredients] = useState<any[]>([]);  // TODO: DTO

    useEffect(() =>
    {
        const getRecipes = async () =>
        {
            const res = await get(new URL("http://localhost:3000/ingredient/"));
            console.log(res);
            setIngredients(res);
        };

        getRecipes();

    }, []);

    return (
        <View>
            <Button title="Create Recipe" onPress={() => router.navigate("/recipes/add")} />
            <Text>Recipes List</Text>

            <FlatList
                data={undefined}
                renderItem={undefined}>


            </FlatList>
        </View>
    );
}