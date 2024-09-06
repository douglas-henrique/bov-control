import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { StyledText } from './styles'

export enum TextVariant {
    Light = 'Montserrat-Light',
    Regular = 'Montserrat-Regular',
    Medium = 'Montserrat-Medium',
    SemiBold = 'Montserrat-SemiBold',
    Bold = 'Montserrat-Bold',
}

export enum TextSize {
    sm = '12px',
    md = '16px',
    lg = '20px',
    xl = '24px',
}


interface TextProps extends RNTextProps {
    variant?: TextVariant;
    size?: TextSize;
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
    variant = TextVariant.Regular,
    size = TextSize.md,
    style,
    children,
    ...rest
}) => {
    return (
        <StyledText variant={variant} size={size} style={style} {...rest}>
            {children}
        </StyledText>
    );
};

export default Text;
