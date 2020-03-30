import React, { useState, createContext } from "react";

export const VariablesContext = createContext();

const DataInit = {
    uri: 'http://192.168.8.109:3001'
}


function VariablesContextProvider(props, ) {
    const { children } = props;
    const [state, setState] = useState(DataInit);
    return (
        <VariablesContext.Provider value={{ ...state}}>
            {children}
        </VariablesContext.Provider>
    );
}

export default VariablesContextProvider;