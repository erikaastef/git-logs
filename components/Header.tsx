import * as React from 'react';
import styled, { css } from 'styled-components/native'
import { SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';

import { useAppDispatch } from '../redux/hooks'
import { logOut, setRepository } from '../redux/userSlice'

type Props = {
    navigation: any,
    screen: string
}
export default function Header({ screen, navigation }: Props) {
    const dispatch = useAppDispatch()
    
    const handleLogOut = () => {
        dispatch(logOut())
        navigation.navigate('Username')
    }
    const searchNewRepo = () => {
        dispatch(setRepository({}))
        navigation.navigate('Repository')
    }
    return (
        <>
            {screen === 'Repository' &&
                <Wrapper justifyContent="flex-end">
                    <StyledButton onPress={handleLogOut}>
                        <Image source={require("../assets/images/logout.png")} />
                        <StyledText>LOG OUT</StyledText>
                    </StyledButton>
                </Wrapper>

            }
            {
                screen === "Home" &&
                <Wrapper>
                    <StyledButton
                        alignItems="flex-start"
                        onPress={searchNewRepo}>
                        <Image source={require("../assets/images/github-min.png")} />
                        <StyledText>SEARCH NEW REPO</StyledText>
                    </StyledButton>
                    <StyledButton onPress={handleLogOut}>
                        <Image source={require("../assets/images/logout.png")} />
                        <StyledText>LOG OUT</StyledText>
                    </StyledButton>
                </Wrapper>
            }
        </>
    )
}
const Wrapper = styled(SafeAreaView) <{ justifyContent?: string }>`
    flex-direction:row;
    width:100%;
    align-items:center;
    justify-content:${({ justifyContent }) => justifyContent ? justifyContent : "space-between"};
    margin-bottom:20px;
    padding:15% 5% 5%;
    background:${({ theme }) => theme.pink};
    
`
const StyledButton = styled(TouchableOpacity) <{ alignItems?: string }>`
    align-items:${({ alignItems }) => alignItems ? alignItems : "flex-end"};
`
const StyledText = styled(Text)`
    color:${({ theme }) => theme.purple};
    font-weight:700;
`