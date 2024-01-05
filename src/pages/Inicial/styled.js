import styled from 'styled-components'


export const StyledInicial = styled.section`

height: 100vh;

display: flex;
align-items: center;
justify-content: center;

#container{
    position: relative;
    overflow: hidden;
    width:500px;
    height: 100%;
    border-radius:20px;
    background: rgb(37,112,204);
    background: radial-gradient(circle, rgba(37,112,204,1) 0%, rgba(47,65,108,1) 100%);
   
}
#minhasTarefas{
    width: 100%;
    height: 90%;
    border-bottom: 2px solid rgba(162, 171, 180, 0.384);
    overflow: auto;
    z-index: 1; 

    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
}
#abelha{
    width: 100%;
    height: 300px;
    position: absolute;
    top: 20%;
    z-index: 0;
}

#cxBotoes{

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;  
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
    gap: 10%;
}
button{
    background-color: transparent;
    border: none;
    color: #ffffff;

    display: flex;

    font-size: 1.1rem;
}
button:hover{
    color: rgb(238,97,16);
    cursor: pointer;
}

#check:hover{
    color: rgb(238,97,16);
    cursor: pointer;
}
#lixo:hover{
    color: rgb(238,97,16);
    cursor: pointer;
}

@media(max-width:600px){
    #container{
        border-radius: 0px;
    }
}
`