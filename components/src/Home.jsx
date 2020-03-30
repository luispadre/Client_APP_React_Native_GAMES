import React from 'react'
import { Text, View, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { Input, Rating, AirbnbRating } from 'react-native-elements';
import { Card, ListItem, Button } from 'react-native-elements'



import { useState } from 'react';
import { DataContext } from '../../Context/Data.Context';
import { useContext } from 'react';
import ListGlobal from '../Lista';
import { useEffect } from 'react';
import { useGameList } from '../../Hooks/useListGames';

// import code from './../../assets/icons/16px/code.svg';
// import SvgUri from 'react-native-svg-uri';

const Wrapper = styled.View`
flex:1;
background-color:#2c3e50;
justify-content:center;

`
const Texto = styled(Text)`
color:#ddd;
`


export function Home({ navigation }) {
    const { getDataAPI } = useContext(DataContext)
    const Game = useGameList()
    useEffect(() => {
        getDataAPI({ urlComplement: 'api/games', setData: Game.setGameList })
    }, [])



    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Wrapper>
                <ScrollView>
                    {Game.gameList.results && Game.gameList.results.map((item, i) => <Card
                        key={i}
                        title={item.name}
                        image={{ uri: `${item.background_image}` }}>
                        <AirbnbRating
                            count={5}
                            // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                            defaultRating={item.rating}
                            size={20}
                        />
                        <Text style={{ marginBottom: 10 }}>
                        {item.rating}
                            The idea with React Native Elements is more about component structure than actual design.
                                </Text>
                        <Button
                            // icon={
                            //     <SvgUri
                            //     width="200"
                            //     height="200"
                            //     svgXmlData={code}
                            //   />     
                            // }
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW' />
                    </Card>)}
                </ScrollView>
                {/* <ListGlobal img={'img'} nombre={'nombre'} onPress={() => alert('Valla valla :D')} /> */}

            </Wrapper>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
});