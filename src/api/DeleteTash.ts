import axios from "axios"


export const DeleteTashData = async (id: string) => {
    await axios.delete(`http://localhost:3333/tash/${id}`)
    return true
}