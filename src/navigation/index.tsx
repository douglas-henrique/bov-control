import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();
export default function AppStack(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerShown: false
                }} name="Home" component={Home}>

                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}