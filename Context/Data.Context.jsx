import React, { useContext, useState, createContext, useEffect } from "react";
import { VariablesContext } from "./Variables.Context";
import axios from 'axios'
import { AuthContext } from "./Auth.Context";
import { Alert } from "react-native";

import { useGameList } from "../Hooks/useListGames";

export const DataContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    loadedData: [],
}

function DataContextProvider({ children }) {


    const GameList = useGameList()

    const { uri } = useContext(VariablesContext)
    const { data = '' } = useContext(AuthContext)
    const { token = '' } = data
    const url = `${uri}/`

    const [state, setState] = React.useState(initialState)

    function postDataAPI(props) {
        const { urlComplement, state, nextAction } = props

        const Vurl = `${url}${urlComplement}`

        axios.post(Vurl, state).then(async res => {
            // console.log(res.data)
            try {

                Alert.alert(
                    'YourApp',
                    `${res.data.message}`,
                    [
                        { text: 'OK', onPress: data.result === 1 ? () => nextAction() : null },
                    ],
                    { cancelable: false },
                )
                res.data.success === true ? nextAction() : null
            } catch (error) {
                console.log(error)
            }
        })
    }

    async function getDataAPI(props) {
        const { urlComplement, setData } = props
        const Vurl = `${url}${urlComplement}`;
        try{
            const response = await axios.get(Vurl);
            setData(response.data)
            // const data = await response.json();
            // console.log(`Here: ${data}`)
        }catch(e){
            console.log(`Error: ${e}`)
        }
    }
    return (
        <DataContext.Provider value={{ ...state, getDataAPI, postDataAPI }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;