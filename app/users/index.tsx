import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserDto } from "@/utils/dtos/User.dto";
import { get } from "@/utils/server/Server";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function UsersList()
{
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState<UserDto[]>([]);

    useEffect(() =>
    {
        const getUser = async () =>
        {
            const res = await get(new URL("http://localhost:3000/users"));
            setUsers(res);
        };
        getUser();
    }, []);


    return (
        <View 
        className="mx-3"
        style={{ 
            flex: 1 
            }}>
            <Card className='w-full max-w-sm'> 
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <Text>Card Body Content</Text>
                </CardContent>
            </Card>

            {users && users.length > 0
                ? users.map((user, index) => (
                    <Card key={index}>
                        <CardContent>
                            <Text key={index}>{user.name}</Text>
                        </CardContent>
                    </Card>
                ))
                : <Text>No users found</Text>
            }
        </View>
    );
}