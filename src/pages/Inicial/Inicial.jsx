import { StyledInicial } from "./styled";

import { CiCirclePlus } from "react-icons/ci";
import { RiSearchEyeLine } from "react-icons/ri";
import Tarefas from "../../components/Tarefas/Tarefas";
import { useState } from "react";


const listaMinhasTarefas = [
    
]

export default function Inicial() {
    const [tarefa, setTarefa] = useState(listaMinhasTarefas)

    function addTarefas() {
        const novaTarefa = prompt('Nova tarefa:')
        
        if (novaTarefa === '' || novaTarefa === null) {
            alert('Digite uma tarefa.');
            return; 
        }
        const novaListaMinhasTarefas = [...tarefa, novaTarefa]
        setTarefa(novaListaMinhasTarefas)
    }
    function deleteTarefa(index) {
        const novaListaMinhasTarefas = [...tarefa];
        novaListaMinhasTarefas.splice(index, 1);
        setTarefa(novaListaMinhasTarefas);
    }

    return (
        <StyledInicial>
            <div id="container">

                <div id="tarefas">
                    {tarefa.map((t,index) =>  <Tarefas 
                     descricao={t}
                     key={index}
                     onDelete={() => deleteTarefa(index)}
                    />
                    
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

