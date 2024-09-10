import { useListData } from "@/hooks/useListData";
import React, { useEffect } from "react";
import * as HomeStyle from './styles'
import Text, { TextSize, TextVariant } from "@/components/Text";
import { List } from "@/components/List";
import { useNetInfo } from "@react-native-community/netinfo";
import { verifyCheckList } from '@/util/sync' 
export default function Home(): React.JSX.Element {
    const { data, isLoading, isError } = useListData();
    const { type, isConnected } = useNetInfo();

    useEffect(() => {
        async function checkIntegrity() {
            if(data){
                const t =  await verifyCheckList(data)
                console.log(t)
            }
        }

        checkIntegrity()
    }, [data])

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