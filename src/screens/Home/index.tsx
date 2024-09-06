import { useListData } from "@/hooks/useListData";
import React from "react";
import * as HomeStyle from './styles'
import Text, { TextSize, TextVariant } from "@/components/Text";

export default function Home(): React.JSX.Element {
    const { data, isLoading, isError } = useListData();

    return (
        <HomeStyle.SafeAreaView>
            <HomeStyle.Header>
                <Text variant={TextVariant.Bold} size={TextSize.xl}>
                    Seus checklists
                </Text>
            </HomeStyle.Header>
            {/* <Text size={TextSize.xl}>
                {
                    isLoading ? `Loading` : JSON.stringify(data)
                }
            </Text> */}
        </HomeStyle.SafeAreaView>
    )
}