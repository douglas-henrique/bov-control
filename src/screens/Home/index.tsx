import { useListData } from "@/hooks/useListData";
import React from "react";
import * as HomeStyle from './styles'
import Text, { TextSize, TextVariant } from "@/components/Text";
import { List } from "@/components/List";

export default function Home(): React.JSX.Element {
    const { data, isLoading, isError } = useListData();

    return (
        <HomeStyle.SafeAreaView>
            <HomeStyle.Header>
                <Text style={{ color: 'black' }} variant={TextVariant.Bold} size={TextSize.xl}>
                    Seus checklists
                </Text>
            </HomeStyle.Header>
            <List items={data || []} />
        </HomeStyle.SafeAreaView>
    )
}