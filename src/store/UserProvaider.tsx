import { ReactNode, useState } from "react";
import { StoreTash } from "./CreateProvaider"; 
import { tash } from "../@types";


interface ProvaiderTashProps {
    children: ReactNode
}

export const ProvaiderTash = ({children}: ProvaiderTashProps) => {

    const [tash, setTash ] = useState<tash[]>([])
    
    return(
        <StoreTash.Provider value={{setTash,tash}}>
            {children}
        </StoreTash.Provider>
    );
}