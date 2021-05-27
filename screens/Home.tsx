import * as React from 'react';
import styled from 'styled-components/native'
import { View } from "react-native";
import Header from '../components/Header'

type Props = {
    navigation: any
}
export default function HomeScreen({ navigation }: Props) {
    return (
        <Container >
            <Header
                screen="Home"
                navigation={navigation} />
        </Container>
    );
}

const Container = styled(View)` 
    flex:1;
    background:${({ theme }) => theme.lightPink}  
`