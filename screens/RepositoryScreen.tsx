import * as React from 'react';
import styled from 'styled-components/native'
import { SafeAreaView, View } from "react-native";
import { LinearProgress } from 'react-native-elements';

import Input from '../components/Input'
import Button from '../components/Button'
import Header from '../components/Header'
import { useAppSelector } from '../redux/hooks'

import { useAppDispatch } from '../redux/hooks'
import { setRepository } from '../redux/userSlice'

import { Octokit } from '@octokit/core'

type Props = {
    navigation: any
}

export default function RepositoryScreen({ navigation }: Props) {
    const [repositoryValue, setRepositoryValue] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    const octokit = new Octokit();

    const fetch = async () => {
        try {

            const userInfo = await octokit.request<any>("GET /users/{username}", {
                username: user.username,
            })
            const commitsResponse = await octokit.request<any>("GET /repos/{owner}/{repo}/commits", {
                owner: user.username,
                repo: repositoryValue
            });
            const repositoryData = {
                commits: commitsResponse.data.map((singleCommit: any) => (
                    {
                        avatar: userInfo.data.avatar_url || "https://avatars.githubusercontent.com/u/6363106?v=4",
                        user_message: singleCommit.commit.message,
                        username: singleCommit.commit.author.name,
                        date: new Date(singleCommit.commit.author.date).toLocaleDateString()
                    }
                ))
            }
            dispatch(setRepository(repositoryData))
            setRepositoryValue('')
            setLoading(false)
            navigation.navigate('Home')
        } catch (err) {
            console.log(err, "err")
            navigation.navigate('Error')
        }
    }
    React.useEffect(() => {
        if (loading) fetch()
    }, [loading])

    return (
        <Container>
            <Header
                screen="Repository"
                navigation={navigation} />
            <Repo>
                {loading ?
                    <LinearProgress color="#431170" />
                    :
                    <>
                        <Input
                            label="Repository"
                            value={repositoryValue}
                            onChangeText={(text) => setRepositoryValue(text)}
                            placeholder="e.g. facebook/home"
                        />
                        <Button
                            title="submit"
                            onPress={() => setLoading(true)}
                        />
                    </>}
            </Repo>
        </Container>
    );
}

const Container = styled(SafeAreaView)` 
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