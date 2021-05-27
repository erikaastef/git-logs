import * as React from 'react';
import styled, { css } from 'styled-components/native'
import { TouchableHighlight, Text } from 'react-native'

type ButtonProps = {
    onPress: any,
    title: string,
}

export default function Button({ onPress, title }: ButtonProps) {
    const [isPress, setIsPress] = React.useState(false)
    return (
        <StyledButton
            onPress={onPress}
            underlayColor="#fb6878"
            onHideUnderlay={() => setIsPress(false)}
            onShowUnderlay={() => setIsPress(true)}
        >
            <StyledText isPress={isPress} >{title}</StyledText>
        </StyledButton>
    )
}
const StyledText = styled(Text)<{ isPress: boolean }>`
    color:${({ theme }) => theme.pink};
    font-weight:700;
    text-align:center;
    text-transform:uppercase;
    ${({ theme, isPress }) => isPress && css`
        color:${theme.purple};
    `}
`
const StyledButton = styled(TouchableHighlight)`
    border-radius:12px;
    padding:5%;
    background:${({ theme }) => theme.purple};
        
`
