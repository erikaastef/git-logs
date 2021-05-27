import * as React from 'react';
import styled from 'styled-components/native'
import { View } from "react-native";
import BackgroundImg from '../../components/BackgroundImg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Logo from '../../components/Logo'

type Props = {
    navigation: any
}

export default function UserNameScreen({ navigation }: Props) {
    const [user, setUser] = React.useState('')
    
    return (
        <BackgroundImg>
            <Container>
                <Logo />
                <View>
                    <Input
                        label="Username"
                        value={user}
                        onChangeText={(text) => setUser(text)}
                        placeholder="e.g. JohnSmith77"
                    />
                    <Button
                        title="submit"
                        onPress={() => navigation.navigate('Password')}
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