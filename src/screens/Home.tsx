import React from "react";
import { Text } from "react-native";
import { BASE_URL } from '@env'

export default function Home(): React.JSX.Element {
    console.log(BASE_URL)
    return (
        <Text>
            {`Hello from react native :)`}
        </Text>
    )
}