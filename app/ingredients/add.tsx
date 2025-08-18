import { CreateRecipeDto } from "@/components/data/recipes/dtos/CreateRecipe.dto";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { post } from "@/utils/server/Server";
import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

export default function AddIngredients()
{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [instructions, setInstructions] = useState("");

    const [ingredientIds, setIngredientIds] = useState<string[]>([]);

    const [modalVisible, setModalVisible] = useState(false);


    const addRecipe = async () =>
    {
        const recipe: CreateRecipeDto = {
            title,
            description,
            ingredientIds: [],
            instructions
        };

        const res = await post(new URL("http://localhost:3000/recipe"), { recipe });
        if (res)
        {
            setTitle("");
            setDescription("");
            setInstructions("");
            setIngredientIds([]);
            console.log("Recipe added successfully");

            setModalVisible(true);
        }
        console.log(res);
    };

    const addDefaultRecipe = async () =>
    {
        const recipe: CreateRecipeDto = {
            title: "Test Recipe",
            description: "This is a test recipe.",
            ingredientIds: [],
            instructions: "Mix all ingredients and bake."
        };

        const res = await post(new URL("http://localhost:3000/recipe"), { recipe });
        if (res)
        {
            console.log("Default recipe added successfully");

            setModalVisible(true);
        }
        console.log(res);
    };


    return (
        <View className="mx-3 mt-3">
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className="flex-1 justify-center items-center">
                    <View className="bg-white p-4 rounded-lg shadow-lg">
                        <Text className="text-lg font-bold mb-4">Recipe Added Successfully!</Text>
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>

            <Text>Add Recipe Page</Text>

            <Label className="mb-2">Title</Label>
            <Input
                placeholder="Enter recipe title..."
                value={title}
                onChangeText={setTitle}
                className="mb-4"
            />

            <Label className="mb-2">Description</Label>
            <Input
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                className="mb-4"
            />

            <Label className="mb-2">Instructions</Label>
            <Input
                placeholder="Instructions"
                value={instructions}
                onChangeText={setInstructions}
                className="mb-4"
            />

            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Button onPress={addRecipe} title={"Add Recipe"} />
                <Button onPress={addDefaultRecipe} title={"Add Default Recipe"} />
            </View>
        </View>
    );
}