import { FacebookLogo, InstagramLogo, LinkedinLogo, Sun, WhatsappLogo } from "phosphor-react"
import Botao from "./components/Botao/Botao.jsx"

function App() {
  return (
    <main className=" h-screen w-full overflow-hidden"> 
      <header className="flex justify-end  p-6">
        <button className="p-2 hover:bg-gray-200 text-black rounded-lg cursor-pointer transition-all duration-600">
          <Sun size={16} />
        </button>
      </header>

      <main className=" h-full w-full flex justify-center items-center">
        <section className="  border rounded-lg border-gray-400 items-center flex flex-col justify-center gap-4 p-6 min-w-96">
          <img src="https://github.com/feliciocavalcante.png" alt="foto de perfil" 
          className="h-32 w-32 rounded-full border-4 border-gray-400"/>

          <h1 className="text-2xl font-bold ">Felicio Cavalcante</h1>
          <p className="text-state-500">Desenvolvedor Full Stack</p>

          <section className="w-full flex flex-col gap-2 ">
            <Botao>
               <a className="flex items-center gap-4 w-full h-full px-4 justify-center " target="_blank" href=""><InstagramLogo size={32} /><p>Instagram</p></a>
            </Botao>
            <Botao>
              <a className="flex items-center gap-4 w-full h-full px-4 justify-center " target="_blank" href=""><LinkedinLogo size={32} /><p>Instagram</p></a>
            </Botao>
            <Botao>
              <a className="flex items-center gap-4 w-full h-full px-4 justify-center " target="_blank" href=""><FacebookLogo size={32} /><p>Instagram</p></a>
            </Botao>
             
            
           

          </section>
        </section>
      </main>
    </main>
  )
}

export default App
