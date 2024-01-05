import { StyledTarefas } from "./styled";


import { CiTrash } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

export default function Tarefas(prop) {
    return (
        <StyledTarefas>

            <div id="tarefa">
                <CiCircleCheck id="check" />
                <div id="nomeTarefa">
                    <h2>{prop.descricao}</h2>
                </div>
                <p>marcos</p>
                <CiTrash id="lixo" onClick={prop.onDelete} />
            </div>

        </StyledTarefas>
    )
}