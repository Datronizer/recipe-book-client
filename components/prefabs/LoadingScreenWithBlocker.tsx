import { ActivityIndicator, View } from "react-native";

export function LoadingScreenWithBlocker({ children }: { children: React.ReactNode })
{
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {children}
            <ActivityIndicator size="large" />
        </View>
    );
}
