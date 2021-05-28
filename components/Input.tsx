import * as React from 'react';
import styled, { css } from 'styled-components/native'

import { TextInput as DefaultInput, View, Text } from 'react-native';

type CustomProps = {
    label: string,
    withBackground?: boolean
}
type InputProps = CustomProps & DefaultInput['props']

export default function Input({ label, withBackground, ...props }: InputProps) {
    return (
        <Container withBackground={withBackground}>
            <Label withBackground={withBackground}> {label} </Label>
            <StyledInput placeholderTextColor="#979797" {...props} />
        </Container>
    )
}
const Label = styled(Text) <{ withBackground?: boolean }>`
    text-transform:capitalize;
    font-weight:700;
    letter-spacing:1px;
    color:${({ theme }) => theme.pink};
    font-size:24px;
    margin-bottom:10px;
    ${({ withBackground }) => withBackground && css`
        font-size:18px;
    `}
`
const Container = styled(View) <{ withBackground?: boolean }>`
    margin-bottom:40px;
    margin-top:30px;
    ${({ withBackground }) => withBackground && css`
        border-radius:12px;
        background:${({ theme }) => theme.purple};
        padding:5% 3%;
        border: 2px solid ${({ theme }) => theme.pink};
    `}
`

const StyledInput = styled(DefaultInput)`
    border-radius:12px;
    background:${({ theme }) => theme.white};
    color:${({ theme }) => theme.black};
    padding:5%;
`
