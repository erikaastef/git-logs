import * as React from 'react';
import styled from 'styled-components/native'
import { View, FlatList, SafeAreaView } from "react-native";
import { ListItem, Avatar } from 'react-native-elements'
import Header from '../components/Header'
import { useAppSelector } from '../redux/hooks'
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
    navigation: any
}
export default function HomeScreen({ navigation }: Props) {
    const repository = useAppSelector<any>((state) => state.user.repository)

    const renderItem = ({ item }: any) => (
        <ListItem bottomDivider>
            <Avatar source={{ uri: item.avatar }} />
            <ListItem.Content>
                <ListItem.Title>Commit</ListItem.Title>
                <ListItem.Subtitle>User: {item.username}</ListItem.Subtitle>
                <ListItem.Subtitle>Message: {item.user_message}</ListItem.Subtitle>
                <ListItem.Subtitle>Date: {item.date}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
    const keyExtractor = (item: any, index: number) => index.toString()

    return (
        <Container >
            <Header
                screen="Home"
                navigation={navigation} />
            <ListContainer>
                <FlatList
                    keyExtractor={keyExtractor}
                    data={repository?.commits}
                    renderItem={renderItem}
                />
            </ListContainer>
        </Container>
    );
}

const ListContainer = styled(ScrollView)`
    margin:0 5% 5%;
`
const Container = styled(View)`
    flex:1;
    background:${({ theme }) => theme.lightPink}
`