import * as React from 'react';
import styled, { css } from 'styled-components/native'
import { TouchableHighlight, Text } from 'react-native'

type ButtonProps = {
    onPress: any,
    title: string,
    withBorder?: boolean
}

export default function Button({ onPress, title, withBorder }: ButtonProps) {
    const [isPress, setIsPress] = React.useState(false)
    return (
        <StyledButton
            onPress={onPress}
            withBorder={withBorder}
            underlayColor="#fb6878"
            onHideUnderlay={() => setIsPress(false)}
            onShowUnderlay={() => setIsPress(true)}
        >
            <StyledText isPress={isPress} >{title}</StyledText>
        </StyledButton>
    )
}
const StyledText = styled(Text) <{ isPress: boolean }>`
    color:${({ theme }) => theme.pink};
    font-weight:700;
    font-size:16px;
    text-align:center;
    text-transform:uppercase;
    letter-spacing:2px;
    ${({ theme, isPress }) => isPress && css`
        color:${theme.purple};
    `}
`
const StyledButton = styled(TouchableHighlight) <{ withBorder?: boolean }>`
    border-radius:12px;
    padding:7%;
    background:${({ theme }) => theme.purple};
    ${({ withBorder }) => withBorder && css`
        border: 2px solid ${({ theme }) => theme.pink};
    `}
`
