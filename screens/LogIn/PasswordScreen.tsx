import * as React from 'react';
import styled from 'styled-components/native'
import {View } from "react-native";
import BackgroundImg from '../../components/BackgroundImg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Logo from '../../components/Logo'

type Props = {
    navigation: any
}
export default function PasswordScreen({ navigation }: Props) {
    const [password, setPassword] = React.useState('')
    return (
        <BackgroundImg>
            <Container>
                <Logo />
                <View>
                    <Input
                        label="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="e.g. admin1234"
                    />
                    <Button
                        title="submit"
                        onPress={() => navigation.navigate('Repository')}
                    />
                </View>
            </Container>
        </BackgroundImg>
    );
}

const Container = styled(View)` 
    height:100%;
    justify-content:space-around;
`