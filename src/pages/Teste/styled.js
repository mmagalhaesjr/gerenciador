import styled from 'styled-components'


export const StyledInicial = styled.section`

height: 100vh;

display: flex;
align-items: center;
justify-content: center;

#container{
    width:500px;
    height: 100%;
    border-radius:20px;
    background: rgb(37,112,204);
    background: radial-gradient(circle, rgba(37,112,204,1) 0%, rgba(47,65,108,1) 100%);
   
}
#tarefas{
    width: 100%;
    height: 80%;
    border-bottom: 2px solid rgba(162, 171, 180, 0.384);
    overflow: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

#cx{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#texto{
    margin-top: 3%;
    border-radius: 20px;
}
#botoes{
    width: 100%;
    margin-top: 3%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20%;
}
button{
    background-color: transparent;
    border: none;
    color: #ffffff;
}
button:hover{
    color: rgb(238,97,16);
    cursor: pointer;
}




//tarefas------------------------
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
#check:hover{
    color: rgb(238,97,16);
    cursor: pointer;
}
#lixo:hover{
    color: rgb(238,97,16);
    cursor: pointer;
}
`