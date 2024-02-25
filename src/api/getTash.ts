import axios from "axios"
import { tash } from "../@types"


export const getTash: () => Promise<tash[]> = async () => {

    const responseTash = await axios.get<tash[]>("http://localhost:3333/tash")
    
    const [tash] = await Promise.all([responseTash])
    const tashData = tash.data
    return tashData
}