import { DeleteTashData } from "../api/DeleteTash";
import { PatchTash } from "../api/PatchTash";
import { getTash } from "../api/getTash";
import { UserProvaider } from "./useProvaider"
import { PostCreateTash } from "../api/CreateTash";
import { toast } from "sonner";
// criado um hook para seta a tash quando tiver uma dessas functions
export const ManipulationTashHook = () => {

    const { setTash } = UserProvaider();
    //hook para criar tash
    const CreateTash = async (title: string) => {
        try {
            await PostCreateTash(title)
            await getTash()
                .then(response => setTash(response))
                toast.success("Tarefa criada com sucesso")
        }catch(err){
            toast.error("Não foi possivel criar a tarefa")
        }
    }
    // hook para seta a lista quando tiver uma tarefa comcluida
    const SetPutListTash = async (id: string) => {
        try {
            await PatchTash(id)
            await getTash()
                .then((res) => setTash(res))
                toast.success("Tarefa concluida")
        }catch(err){
            toast.error("Não foi possivel Atualizar a tarefa")
        }
    }
    // hook para atualizar a lista quando uma tarefa for deletada
    const DeleteTash = async (id: string) => {

        try {
            await DeleteTashData(id)
            await getTash()
                .then((res) => setTash(res))
                toast.success("Tarefa Apagada")
        }catch(err){
            toast.error("Não foi possivel apagar a tarefa")
        }
    }
    // retornando os hooks
    return {
        SetPutListTash,
        DeleteTash,
        CreateTash
    }
}
