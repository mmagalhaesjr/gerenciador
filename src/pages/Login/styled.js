import styled from 'styled-components'


export const StyledLogin = styled.section`

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

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

img{
    width: 300px;
    margin-bottom: 5%;
}

form{
    background: rgba(255, 255, 255, 0.15); 
    border-radius: 10px;
    padding: 20px;
    backdrop-filter: blur(10px); 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    width:90%;
    height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

        input{
            margin-bottom: 30px;
        }
        .inputBox{
            position: relative;
            width: 80%;
        }

        .inputUser{
            background: none;
            border: none;
            border-bottom: 1px solid white;
            outline: none;
            color: white;
            font-size: 20px;
            width: 100%;
            letter-spacing: 2px;

            
        }
        .labelInput{
            position: absolute;
            top: 0px;
            left: 0px;
            pointer-events: none;
            transition: .5s;

            
        }
        .inputUser:focus ~ .labelInput,
        .inputUser:valid ~ .labelInput{
            top: -20px;
            font-size: 12px;
            color: rgb(238,97,16);
        }
      
        #submit{
            background-color: #2a2a2a62;
            width: 50%;
            border: none;
            padding: 15px;
            color: white;
            font-size: 15px;
            cursor: pointer;
            border-radius: 10px;
        }
        #submit:hover{
           background-color: rgb(238,97,16);
        }

a{
    font-size: .7rem;
    margin-top:5%;
    cursor: pointer;

    
}
a:hover{
        color: rgb(238,97,16);
        }

`