import styled from 'styled-components'


export const StyledMinhasTarefas = styled.section`

height: 100vh;

display: flex;
align-items: center;
justify-content: center;

#tarefa{
    width: 98%;
    height:60px;
    margin-bottom: 3%;
    border-radius: 50px;
    background: rgb(162,171,180);
    background: radial-gradient(circle, rgba(162,171,180,0.29315476190476186) 0%, rgba(200,204,224,0.27074579831932777) 100%);

    display: flex;
   
    align-items: center;
    justify-content: center;
    gap: 7%;
    color: #ffffff;
}
#nomeTarefa{
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
   
}
#tarefa h2{
font-size: 1rem;
}
#tarefa p{
font-size:.7rem;
}
`