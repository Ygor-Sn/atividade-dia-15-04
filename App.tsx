import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as React from 'react-native';
import { SignIn } from './pages/SignIn'

export const container =  styled.TextInput``;

export default function App() {
  return (
    <SignIn/>
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
