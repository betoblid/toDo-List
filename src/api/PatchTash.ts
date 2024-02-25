import axios from "axios"

export const PatchTash = async (id: string) => {

   await axios.patch(`http://localhost:3333/tash/${id}`,{
        completed: true
    })

}