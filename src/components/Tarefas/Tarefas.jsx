import { StyledTarefas } from "./styled";
import { useState } from "react";


import { CiTrash } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

export default function Tarefas(prop) {
    const [concluida, setConcluida] = useState(null)

    function tarefaConcluida() {
        setConcluida(!concluida);
    }

    return (
        <StyledTarefas concluida={concluida}>
            <div id="tarefa">
                <CiCircleCheck id="check" onClick={tarefaConcluida} />
                <div id="nomeTarefa">
                    <h2>{prop.descricao}</h2>
                </div>
                <p>marcos</p>
                <CiTrash id="lixo" onClick={prop.onDelete} />
            </div>
        </StyledTarefas>
    )
}
