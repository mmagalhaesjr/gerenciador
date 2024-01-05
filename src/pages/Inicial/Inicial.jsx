import { StyledInicial } from "./styled";

import { CiCirclePlus } from "react-icons/ci";
import { RiSearchEyeLine } from "react-icons/ri";
import Tarefas from "../../components/Tarefas/Tarefas";
import { useState } from "react";


const listaMinhasTarefas = [
    'fazer landing pages',
    'foto zé das flores',
    'criar blog16'
]

export default function Inicial() {
    const [tarefa, setTarefa] = useState(listaMinhasTarefas)

    function addTarefas() {

        const novaTarefa = prompt('Nova tarefa:')
        const novaListaMinhasTarefas = [...tarefa, novaTarefa]
        setTarefa(novaListaMinhasTarefas)
    }

    return (
        <StyledInicial>
            <div id="container">

                <div id="tarefas">
                    {tarefa.map((t) =>  <Tarefas descricao={t}  key={t.id} />
                    
                    )}
                </div>

                <div id="cx">

                    {/* <textarea id="texto" className="imputMesnsagem" name="msg" rows="2" cols="50"></textarea> */}

                    <div id="botoes">
                        <button onClick={addTarefas} >  <CiCirclePlus />  NOVA TAREFA</button>
                        <button> <RiSearchEyeLine /> VER TODAS AS TAREFAS</button>
                    </div>

                </div>

            </div>
        </StyledInicial>
    )
}