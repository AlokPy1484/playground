"use client"

import { createContext, ReactNode, useReducer } from "react"





interface State {
    count: number,
    error: string | null
}

interface Action {
    type: "increment" | "decrement"
}


function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + 1,
            };

        case "decrement":
            return {
                ...state,
                count: state.count - 1,
            };

        default:
            return state;
    }
}


interface CounterContextType {
    state: State,
    dispatch: React.Dispatch<Action>
}


export const CounterContext = createContext<CounterContextType | undefined>(undefined)




export function CounterProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null,
    });


    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
}
