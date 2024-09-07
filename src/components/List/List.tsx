import { ListItemProps } from "@/types/list";
import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "./ListItem";
interface ListProps {
    items: ListItemProps[]
}

export default function List({ items }: ListProps) {
    return (
        <FlatList
            data={items}
            renderItem={({ item }) => <ListItem item={item} />}
            keyExtractor={item => item._id.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
    )
}