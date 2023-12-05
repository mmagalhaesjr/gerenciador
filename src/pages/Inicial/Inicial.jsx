import MinhasTarefas from "../../components/MinhasTarefas/MinhasTarefas";
import { StyledInicial } from "./styled";

import { CiCirclePlus } from "react-icons/ci";
import { RiSearchEyeLine } from "react-icons/ri";

export default function Inicial() {
    return (
        <StyledInicial>
            <div id="container">

                <div id="tarefas">
                    <MinhasTarefas />
                </div>

                <div id="cx">

                        <textarea id="texto" className="imputMesnsagem" name="msg" rows="2" cols="50"></textarea>

                        <div id="botoes">
                            <button>  <CiCirclePlus />  NOVA TAREFA</button>
                            <button> <RiSearchEyeLine /> VER TODAS AS TAREFAS</button>

                        </div>
                    

                </div>

            </div>
        </StyledInicial>
    )
}