import React from 'react'
import { Text, View, KeyboardAvoidingView ,StyleSheet} from 'react-native'
import styled from 'styled-components/native'
import { Input, Button, Card } from 'react-native-elements';
import { useState } from 'react';
import { DataContext } from '../../Context/Data.Context';
import { useContext } from 'react';

const Wrapper = styled.View`
flex:1;
background-color:#2c3e50;
justify-content:center;

`
const Texto = styled(Text)`
color:#ddd;
`


export function Login({navigation}) {
    const [state,setState]=useState({email:'',password:''})
    const {postDataAPI}=useContext(DataContext)
    const handleSubmit=()=>postDataAPI({state:state,urlComplement:'api/accounts/login',nextAction:()=>{navigation.navigate('Home')}})
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Wrapper>
            <Card  containerStyle={[styles.form,{ padding: 0, height: '60%', borderRadius: 14,justifyContent:'center',alignContent:'center',alignItems:'center' }]} >
                <View style={{ height: '20%'}}>
                    <Texto style={{ color: "#2c3e50", fontSize: 35 ,textAlign:'center' }}>
                        Titulo de la APP
                    </Texto>
                </View>
                <View style={{ height: '40%',marginTop:"20%"}}>
                    <Texto style={{ color: "#2c3e50", fontSize: 16 ,textAlign:'center'}}>
                        Inicia Sesión
                    </Texto>
                    <Input
                        placeholder='Usuario'
                        value={state.email}
                        onChangeText={(e)=>setState({...state,email:e})}
                    />
                    <Input
                        placeholder='Contraseña'
                        value={state.password}
                        onChangeText={(e)=>setState({...state,password:e})}
                    />
                </View>
                <Button
                        title="Iniciar Sesión"
                        type="outline"
                        onPress={()=>{handleSubmit()}}
                    />
            </Card>
        </Wrapper>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    }, 
});