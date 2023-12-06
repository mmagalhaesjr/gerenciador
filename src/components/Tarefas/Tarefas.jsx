import { StyledTarefas } from "./styled";


import { CiTrash } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

export default function Tarefas() {
    return (
        <StyledTarefas>

            <div id="tarefa">
                <CiCircleCheck />
                <div id="nomeTarefa">
                    <h2>nome da tarefa</h2>
                </div>
                <p>responsavel </p>
                <CiTrash />

            </div>

        </StyledTarefas>
    )
}