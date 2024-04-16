import React from 'react';

import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { PropsWithChildren } from "react";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({title, ...otherProps}:
    PropsWithChildren<ButtonProps>) => {
        return <Container{...otherProps}>
        <Title>{title}</Title>
        </Container>
    };
    