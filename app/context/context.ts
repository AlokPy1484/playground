import { createContext, useContext } from "react";


interface User {
    name: string,
    age: number
}



export const DashboardContext = createContext<User | undefined>(undefined)




// To use it anyware just write the code below
// const user = useContext(DashboardContext)


//And wrap the child component with
// <DashboardContext.Provider value={user}>
//       child component here
// </DashboardContext.Provider>



export function useUserContext() {
    const user = useContext(DashboardContext)

    if (user === undefined) {
        throw new Error("useUserContext must be used within a DashboardProvider")
    }

    return user
}

