import { createContext } from "react"; 
import { tash } from "../@types";


interface StoreTashValue {
    setTash:  React.Dispatch<React.SetStateAction<tash[]>>,
    tash: tash[]
}
export const StoreTash = createContext({} as StoreTashValue)
StoreTash.displayName = "StoreTash"