import React, { useContext, useReducer } from 'react'

const defaultState = {
    mode: "dark",
}

export const StateContext = React.createContext<any | {}> ({})

export const AppState = () => {
    
    const [ state = defaultState, dispatch ] = useContext(StateContext)

    return {
        applicationState: state,
        setMode
    }

    function setMode(mode: any) {
        dispatch({type: "SET_MODE", payload: mode})
    }
}

export const appReducer = ( state: any, action: any) => {
    switch(action.type){
        case "SET_MODE":
            return {...state, mode: action.payload}
        default: 
            return state
    }
}

export const StateProvider = (props: any) => {
    return ( 
        <StateContext.Provider  value={ useReducer(appReducer, defaultState) }>
            {props.children}
        </StateContext.Provider>
    )
}