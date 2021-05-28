import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, Text } from "react-native";
import Button from '../components/Button'
import { useAppDispatch } from '../redux/hooks'
import { logOut } from '../redux/userSlice'

type Props = {
    navigation: any
}

export default function ErrorScreen({ navigation }: Props) {
    const dispatch = useAppDispatch()
    return (
        <Container>
            <StyledText>
                Oops!
            </StyledText>
            <StyledText>
                There was an error in the request.
                </StyledText>
            <StyledText>
                Please try again later.
            </StyledText>
            <Button
                title="Go to login"
                onPress={() => {
                    dispatch(logOut())
                    navigation.navigate("Username")
                }}
            />
        </Container>
    )
}

const Container = styled(SafeAreaView)` 
    padding: 30% 5% 15%;
    height:100%;
    justify-content:space-between;
    background:${({ theme }) => theme.lightPink}
`
const StyledText = styled(Text)`
    text-align:center;
    letter-spacing:1px;
    font-size:24px;
    color: ${({ theme }) => theme.purple}
`