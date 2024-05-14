import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SignUp } from './pages/SignUp';
import styled from 'styled-components/native';
import * as React from 'react-native';
import { SignIn } from './pages/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';

export const container =  styled.TextInput``;

export default function App() {
  return (
    <NavigationContainer>
    <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
