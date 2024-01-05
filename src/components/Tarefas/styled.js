import styled from 'styled-components'


export const StyledTarefas = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


#tarefa{
    width: 98%;
    height:60px;
    margin-bottom: 3%;
    border-radius: 50px;
   
    background: ${(prop) => (prop.concluida ? 'yellow' : 'radial-gradient(circle, rgba(162,171,180,0.29315476190476186) 0%, rgba(200,204,224,0.27074579831932777) 100%)')};

    display: flex;
   
    align-items: center;
    justify-content: center;
    gap: 7%;
    color: ${(prop) => (prop.concluida ? 'black' : 'white')};
    
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
#check,#lixo{
    font-size: 1.5rem;
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