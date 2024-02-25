import { Trash2 } from "lucide-react"
import { ManipulationTashHook } from "../../Hooks/ManipulationTashHook"

interface CardListProps {
    title: string,
    id: string,
    completed: boolean
}

export const CardTash = ({ id, title, completed }: CardListProps) => {

    const { SetPutListTash, DeleteTash } = ManipulationTashHook()

    const HandleCompletedTash = () => {
        SetPutListTash(id)
    }
    const HandlerRemoveTash = () => {
        DeleteTash(id)
    }
    return (
        <li
            className={`p-3 flex items-center justify-between rounded-lg ${completed ? 'line-through text-[#808080] bg-[#1b1b1b]' : 'text-white bg-[#3b3b3b]'}`}>

            <input
                type="checkbox"
                className={`border border-blue-400 max-w-5 w-4 h-4 max-h-5 text-blue-300 rounded-full appearance-none ${completed ? "bg-blue-300" : "cursor-pointer"} `}
                disabled={completed}
                onClick={ HandleCompletedTash }
            />

            <h2
                className="text-sm font-normal text-start">
                {title}
            </h2>
            <button onClick={HandlerRemoveTash} className="text-[#808080] text-base">
                <Trash2 />
            </button>
        </li>
    )
}