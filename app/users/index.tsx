import { Card, CardContent } from "@/components/ui/card";
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
        <View style={{ flex: 1 }}>
            <Text>Users List</Text>

            <Card>
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