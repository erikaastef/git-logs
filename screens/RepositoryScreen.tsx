import * as React from 'react';
import styled from 'styled-components/native'
import { View } from "react-native";
import Input from '../components/Input'
import Button from '../components/Button'
import Header from '../components/Header'

type Props = {
    navigation: any
}

export default function RepositoryScreen({ navigation }: Props) {
    const [repository, setRepository] = React.useState('')
    return (


        <Container>
            <Header
                screen="Repository"
                navigation={navigation} />
            <Repo>
                <Input
                    label="Repository"
                    value={repository}
                    onChangeText={(text) => setRepository(text)}
                    placeholder="e.g. facebook/home"
                />
                <Button
                    title="submit"
                    onPress={() => navigation.navigate('Home')}
                />
            </Repo>
        </Container>

    );
}

const Container = styled(View)` 
    height:100%;
    justify-content:space-between;
    background:${({ theme }) => theme.lightPink}
`
const Repo = styled(View)`
    flex:1;
    flex-direction:column;
    justify-content:center;
    padding:0 5%;
`