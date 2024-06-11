import React from 'react';
import { ScrollView } from 'react-native';
import { Input } from '../../src/components/screen/input';
import { Container, Content, CreateAccount, CreateAccountTitle, Logo, Title, Icon } from './styles';
import { Button } from '../../src/components/screen/button';
import favicon from '../../assets/favicon.png';
import { useNavigation } from '@react-navigation/native';

export const SignIn: React.FunctionComponent = () => {
    const navigation =
    useNavigation<ScreenNavigationProp
    >();
    return (
        <>
        <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}>
        <Container>
            <Content>
            <Logo source={favicon}/>
            <Title>Login</Title>
            <Input placeholder="Email"/>
            <Input placeholder="Senha"/>
            <Button title='Entrar'/>
            </Content>
        </Container>
        </ScrollView>
        <CreateAccount onPress={() => {
            navigation.navigate('SignUp');
        }}>
            <Icon name="log-in"/>
            <CreateAccountTitle>Criar Novo Conta</CreateAccountTitle>
        </CreateAccount>
        </>
);
    interface ScreenNavigationProp {
    navigate: (screen: string) => void;
    }
};
