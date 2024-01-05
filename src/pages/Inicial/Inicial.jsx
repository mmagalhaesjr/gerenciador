import { StyledInicial } from "./styled";

import { CiCirclePlus } from "react-icons/ci";
import { RiSearchEyeLine } from "react-icons/ri";
import Tarefas from "../../components/Tarefas/Tarefas";
import { useState } from "react";

import abelha from '../../assets/abelha-fundo.png'


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

                <img id="abelha" src={abelha} alt="foto" />

                <div id="tarefas">
                    {tarefa.map((t,index) =>  <Tarefas 
                     descricao={t}
                     key={index}
                     onDelete={() => deleteTarefa(index)}
                    />
                    
                    )}
                </div>

                <div id="cxBotoes">

                    {/* <textarea id="texto" className="imputMesnsagem" name="msg" rows="2" cols="50"></textarea> */}

                    <div id="botoes">
                        <button onClick={addTarefas} >  <CiCirclePlus /> <p>NOVA TAREFA</p></button>
                        <button> <RiSearchEyeLine /> <p>VER TODAS AS TAREFAS</p></button>
                    </div>

                </div>

            </div>
        </StyledInicial>
    )
}

