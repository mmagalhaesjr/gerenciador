import { StyledTarefas } from "./styled";


import { CiTrash } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

export default function Tarefas(prop) {
    return (
        <StyledTarefas>

            <div id="tarefa">
                <CiCircleCheck />
                <div id="nomeTarefa">
                    <h2>{prop.tarefa}</h2>
                </div>
                <p>{prop.nome}</p>
                <CiTrash />

            </div>

        </StyledTarefas>
    )
}