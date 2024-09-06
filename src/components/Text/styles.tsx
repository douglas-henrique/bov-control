import styled from "styled-components/native";
import { TextVariant, TextSize } from ".";

export const StyledText = styled.Text<{ variant: TextVariant; size: TextSize }>`
    font-family: ${(props) => props.variant};
    font-size: ${(props) => props.size};
`;