import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native'

type Props = {
    children: any
}

export default function BackgroundImg({ children }: Props) {
    return (
        <Background source={require('../assets/images/abstract-bg.jpg')} >
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </Background>
    )
}

const Background = styled.ImageBackground`
    flex: 1;
    resize-mode: cover;
    padding: 33% 5% 10%;
`
