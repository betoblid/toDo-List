import { Clipboard } from "lucide-react";
import { ListTash } from "../../@types";
import { CardTash } from "../CardTash";

export const ListCard = ({ list }: ListTash) => {

    const totalCompleted = list.reduce((acc, iten) => {
        if (iten.completed) {
            return acc + 1
        }
        return acc
    }, 0)
    return (
        <ul className="max-w-[639px] w-full mx-auto space-y-3">
            <li className="flex items-center justify-between border-b border-gray-600 pb-1">
                <h2 className="text-[#4EA8DE] font-bold sm:text-base text-xs">
                    Tarefas criadas:
                    <span className="bg-[#333333] px-2 rounded-md text-white sm:ml-2 ml-0.5 ">{list.length}</span>
                </h2>

                <h2 className="text-[#8284FA] font-bold sm:text-base text-xs">
                    Concluídas:
                    <span className="bg-[#333333] py-0.5 px-2 rounded-xl text-white sm:ml-2 ml-0.5">{totalCompleted + " e " + list.length}</span>
                </h2>
            </li>

            {
                list.length < 1 && (
                    <li className="text-center">
                        <Clipboard className="text-gray-600 mx-auto mt-10 mb-2" />
                        <h2 className="font-bold text-base text-gray-300 ">Você ainda não tem tarefas cadastradas</h2>
                        <p className="font-normal text-gray-400 text-base">Crie tarefas e organize seus itens a fazer</p>
                    </li>
                )
            }

            {
                list.map((iten) => (
                    <CardTash key={iten.id} id={iten.id} completed={iten.completed} title={iten.title} />
                ))
            }
        </ul>
    );
}