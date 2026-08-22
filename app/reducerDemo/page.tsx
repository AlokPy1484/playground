"use client"

import { useReducer } from "react"



interface State {
    count: number,
    error: string | null
}

interface Action {
    type: "increment" | "decrement"

}


//reducer 
function reducer(state: State, action: Action) {
    const { type } = action

    switch (type) {
        //first it return copy of state and overwrite count value

        case "increment": {
            const newCount = state.count + 1
            const hasError = newCount > 5
            return {
                ...state, count: hasError ? state.count : newCount,
                error: hasError ? "Count cannot be greater than 5" : null
            }
        }

        case "decrement": {
            return { ...state, count: state.count - 1 }
        }
    }

}


export default function ReducerDemo() {

    const [state, dispatch] = useReducer(reducer, {

        count: 0,
        error: null
    })


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {state.error && <a className="text-red-500">{state.error}</a>}

            <h1 className="text-2xl font-bold mb-4 text-white">{state.count}</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">increment</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg" >decrement</button>

        </div>
    )
}