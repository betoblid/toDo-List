import { Link } from "react-router-dom";
import Ilustration from "../../assets/404.png"


export const Erro = () => (
   <section className="flex items-center justify-center flex-col h-screen w-full gap-4">
    <div>
        <img src={Ilustration} alt="Imagem com 404" className="md:w-full w-9/12" />
    </div>
        <div>
            <h2 className="text-center font-semibold">Pagina não exite por favor volte para pagina principal</h2>
            <div className="mt-4 flex items-center justify-center">
                  <Link to="/" className="bg-blue-500 text-white font-bold text-xl px-6 py-1 rounded-2xl">Voltar</Link>
            </div>
          
        </div>
   </section>
)