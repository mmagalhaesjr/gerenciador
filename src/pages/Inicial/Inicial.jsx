import { StyledInicial } from "./styled";

import { CiCirclePlus } from "react-icons/ci";
import { RiSearchEyeLine } from "react-icons/ri";
import Tarefas from "../../components/Tarefas/Tarefas";
// import { useState } from "react";



export default function Inicial() {

    const listaMinhasTarefas = [
        {id:1,tarefa:'fazer café', nome:'marcos'},
        {id:2,tarefa:'beber agua', nome:'junior'}
    ]

    // const [tarefa, setTarefa] = useState(listaMinhasTarefas)

    function addTarefas(){
        const novaTarefa = prompt()

        // setTarefa(novaTarefa)
        listaMinhasTarefas.push(novaTarefa)
        
        console.log(listaMinhasTarefas)
    }
/* */
    return (
        <StyledInicial>
            {console.log(listaMinhasTarefas)}
            <div id="container">

                <div id="tarefas">
                    {listaMinhasTarefas.map((t) => <Tarefas tarefa={t.tarefa} nome={t.nome} key={t.id} />)}
                </div>

                <div id="cx">

                        <textarea id="texto" className="imputMesnsagem" name="msg" rows="2" cols="50"></textarea>

                        <div id="botoes">
                            <button onClick={addTarefas} >  <CiCirclePlus />  NOVA TAREFA</button>
                            <button> <RiSearchEyeLine /> VER TODAS AS TAREFAS</button>

                        </div>
                    

                </div>

            </div>
        </StyledInicial>
    )
}