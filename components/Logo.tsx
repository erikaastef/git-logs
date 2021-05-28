import * as React from 'react';
import styled from 'styled-components/native'

import { View, Image, Text } from 'react-native'

export default function Logo() {
    return (
        <Container>
            <Icon source={require("../assets/images/github.png")} />
            <StyledText>
                Git Logs
            </StyledText>
        </Container>
    )
}
const Container = styled(View)`
    flex-direction:column;
    width:100%;
    align-items:center;
    justify-content:center;
    margin-top:20px;
`
const Icon = styled(Image)`
    margin-bottom:35px;
`
const StyledText = styled(Text)`
    color:${({ theme }) => theme.pink};
    font-size:34px;
    text-transform:uppercase;
    letter-spacing:2px;
`
