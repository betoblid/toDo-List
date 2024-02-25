import { Rocket } from "lucide-react"
import { useEffect, useRef } from "react"
import { getTash } from "../../api/getTash"
import { UserProvaider } from "../../Hooks/useProvaider"
import { ManipulationTashHook } from "../../Hooks/ManipulationTashHook"
import { toast } from "sonner"
import { ListCard } from "../../components/ListCard"

export const Home = () => {

    const { setTash, tash } = UserProvaider()
    const { CreateTash } = ManipulationTashHook()
    // Pegar o valor do input sem ativar renderização sem motivo
    const tashRef = useRef<HTMLInputElement | null>(null)
    // pegar o dado dentro de uma api json serve
    useEffect(() => {
        getTash()
            .then(response => setTash(response))
    }, [])

    function HandlerCreateTash() {
        const valueTashInput = tashRef.current?.value
        if (typeof valueTashInput !== "undefined" && typeof valueTashInput !== null && valueTashInput.length > 4) {
            //CreateTash(valueTitle)
            CreateTash(valueTashInput)
        } else if (typeof valueTashInput !== "undefined" && valueTashInput.length < 4) {
            toast.info("Digite no minimo 4 caracteres para criar uma tarefa")
        }
        else {
            toast.error("Não foi possivel criar a tarefa.")
        }
    }
    return (
        <section >
            <div
                className=" min-h-screen">

                <div className="min-h-[24vh] bg-[#0D0D0D] w-full flex items-center justify-center flex-col">

                    <div className="w-full flex items-center justify-center py-4">
                        <Rocket className="text-blue-600 -rotate-45" />
                        <h1 className="text-blue-600 text-5xl font-bold ">to
                            <span className="text-purple-800">do</span>
                        </h1>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-[#0D0D0D] from-5% to-[#262626] to-5% min-h-[76vh]">
                    <div
                        className=" gap-2  max-w-[638px] w-full mx-auto  flex items-center justify-center flex-col sm:flex-row">

                        <input
                            type="text"
                            placeholder="Escreva sua Tarefa"
                            ref={tashRef}
                            className="bg-gray-500/40 w-full font-semibold text-white placeholder:text-gray-300 py-2.5 px-1 flex-1"
                        />
                        <button
                            onClick={HandlerCreateTash}
                            className="bg-[#1E6F9F] text-lg text-white w-28 rounded-md py-2 px-3 font-bold"
                        >
                            Criar +
                        </button>
                    </div>
                    <div className="mt-10 w-full pb-5">

                   
                        <ListCard list={tash} />

                    </div>
                </div>
            </div>
        </section>
    )
}