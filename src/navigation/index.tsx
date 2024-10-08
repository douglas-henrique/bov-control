import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/screens";

const Stack = createNativeStackNavigator();
export default function AppStack(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}