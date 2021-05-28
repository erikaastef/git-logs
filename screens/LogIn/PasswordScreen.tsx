import * as React from 'react';
import styled from 'styled-components/native'
import { View } from "react-native";
import BackgroundImg from '../../components/BackgroundImg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Logo from '../../components/Logo'

import { useAppDispatch } from '../../redux/hooks'
import { setPassword } from '../../redux/userSlice'

type Props = {
    navigation: any
}
export default function PasswordScreen({ navigation }: Props) {
    const [passwordValue, setPasswordValue] = React.useState('')
    const dispatch = useAppDispatch()
    
    const handleSubmit = () => {
        dispatch(setPassword(passwordValue))
        navigation.navigate('Repository')
    }

    return (
        <BackgroundImg>
            <Container>
                <Logo />
                <View>
                    <Input
                        label="Password"
                        value={passwordValue}
                        onChangeText={(text) => setPasswordValue(text)}
                        placeholder="e.g. admin1234"
                        secureTextEntry={true}
                        withBackground
                    />
                    <Button
                        withBorder
                        title="submit"
                        onPress={handleSubmit}
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