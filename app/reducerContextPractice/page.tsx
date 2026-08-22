"use client"

import { useContext, useReducer } from "react"
import { CounterContext } from "./counterContext"





export default function page() {

    const context = useContext(CounterContext);
    const { state, dispatch } = context;


    return (

        <CounterContext.Provider value={state}>
            <div className="flex flex-col justify-center items-center w-screen h-screen bg-neutral-900 gap-4">

                <a className="text-8xl font-bold text-neutral-100">{state.count}</a>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => dispatch({ type: "increment" })} >increment</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => dispatch({ type: "decrement" })} >decrement</button>

            </div>
        </CounterContext.Provider>
    )
}