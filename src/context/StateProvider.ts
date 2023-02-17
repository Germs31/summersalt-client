import React, { useContext, useReducer } from 'react'

const defaultState = {
    user: {}
}

export const StateContext = React.createContext<any | {}> ({})

export const AppState = () => {
    const [ state = defaultState, dispatch ] = useContext(StateContext)
    return {
        applicationState: state,
        setUser
    }

    function setUser(user: any) {
        dispatch({type: "SET_USER", payload: user})
    }
}

export const appReducer = ( state: any, action: any) => {
    switch(action.type){
        case "SET_USER":
            return {...state, user: action.payload}
        default: 
            return state
    }
}

// export const StateProvider = (props: any) => {
//     return ( 
//         <></>
//         // <StateContext.Provider value={ useReducer(appReducer, defaultState)}>
//         //     {props.children}
//         // </StateContext.Provider>
//     )
// }