import axios from "axios"

export const PostCreateTash = async (title: string) => {
    
    await axios.post(`http://localhost:3333/tash`,{
        title: title,
        completed: false
    })
}