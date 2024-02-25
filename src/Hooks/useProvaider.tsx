import { useContext } from "react";
import { StoreTash } from "../store/CreateProvaider";
// usar o context API
export function UserProvaider(){
    return useContext(StoreTash)
}