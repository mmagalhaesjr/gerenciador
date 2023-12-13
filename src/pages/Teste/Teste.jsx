import { StyledInicial } from "./styled";
import { CiCirclePlus } from "react-icons/ci";
import { RiSearchEyeLine } from "react-icons/ri";
import { CiTrash } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
// import Tarefas from "../../components/Tarefas/Tarefas";
import { useState } from "react";

export default function Inicial() {
    const listaMinhasTarefas = ['fazer landing pages', 'foto zé das flores', 'criar blog16',];
    const [tarefas, setTarefas] = useState(listaMinhasTarefas);

    function addTarefa() {
        const novaTarefa = prompt('Nova tarefa:');
        const novaListaMinhasTarefas = [...tarefas, novaTarefa];
        setTarefas(novaListaMinhasTarefas);
    }

    function removerTarefa(index) {
        const novaListaMinhasTarefas = [...tarefas];
        novaListaMinhasTarefas.splice(index, 1);
        setTarefas(novaListaMinhasTarefas);
    }

    return (
        <StyledInicial>
            <div id="container">
                <div id="tarefas">
                    {tarefas.map((tarefa, index) => (
                        <div id="tarefa" key={index}>
                            <CiCircleCheck id="check" />
                            <div id="nomeTarefa">
                                <h2>{tarefa}</h2>
                            </div>
                            <p>marcos</p>
                            <CiTrash id="lixo" onClick={() => removerTarefa(index)} />
                        </div>
                    ))}
                </div>

                <div id="cx">
                    <div id="botoes">
                        <button onClick={addTarefa}> <CiCirclePlus /> NOVA TAREFA</button>
                        <button onClick={() => console.log(tarefas)}> <RiSearchEyeLine /> VER TODAS AS TAREFAS</button>
                    </div>
                </div>
            </div>
        </StyledInicial>
    );
}
