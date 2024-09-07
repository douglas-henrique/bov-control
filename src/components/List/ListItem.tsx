import { ListItemProps } from "@/types/list";
import * as ListItemStyle from './styles'
import React from "react";
import Text, { TextVariant, TextSize } from "@/components/Text";
import { DateTime } from 'luxon'
import { TouchableOpacity } from "react-native";

interface ItemData {
    item: ListItemProps
}
export default function ListItem(props: ItemData) {
    const { item } = props

    const formattedCreatedAt = DateTime.fromISO(item.created_at).toFormat('dd/MM/yyyy')

    return (
        <TouchableOpacity onPress={() => console.log('pressed')}>
            <ListItemStyle.Container>
                <Text variant={TextVariant.Medium} size={TextSize.sm}>
                    Fazenda: {item.farmer.name}
                </Text>
                <Text variant={TextVariant.Medium} size={TextSize.sm}>
                    Cidade:  {item.farmer.city}
                </Text>
                <Text variant={TextVariant.Medium} size={TextSize.sm}>
                    Fazendeiro:  {item.from.name}
                </Text>
                <Text variant={TextVariant.Medium} size={TextSize.sm}>
                    Data de criacao:  {formattedCreatedAt}
                </Text>
            </ListItemStyle.Container>
        </TouchableOpacity>

    )
}