import * as React from 'react';
import styled from 'styled-components/native'

import { TextInput as DefaultInput, View, Text } from 'react-native';

type CustomProps = {
    label: string
}
type InputProps = CustomProps & DefaultInput['props']

export default function Input({ label, ...props }: InputProps) {
    return (
        <Container>
            <Label>{label} </Label>
            <StyledInput placeholderTextColor="#979797" {...props} />
        </Container>
    )
}
const Container = styled(View)`
    border-radius:12px;
    background:${({ theme }) => theme.purple};
    margin-bottom:20px;
    margin-top:20px;
    padding:3% 2%;
`
const Label = styled(Text)`
    text-transform:capitalize;
    font-weight:700;
    letter-spacing:1px;
    color:${({ theme }) => theme.white};
    font-size:20px;
    margin-bottom:10px;
`
const StyledInput = styled(DefaultInput)`
    border-radius:12px;
    background:${({ theme }) => theme.white};
    color:${({ theme }) => theme.black};
    padding:5%;
`
