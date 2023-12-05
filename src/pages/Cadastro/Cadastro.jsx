import { StyledCadastro } from "./styled";

import logo from '../../assets/1.png'

export default function Cadastro() {
    return (
        <StyledCadastro>
            <div id="container">

            <img src={logo} alt="logo" />

                <form>

                <div className="inputBox">
                        <input type="text" name="email" id="email" className="inputUser" required />
                        <label htmlFor="text" className="labelInput">Nome</label>
                    </div>

                    <div className="inputBox">
                        <input type="text" name="email" id="email" className="inputUser" required />
                        <label htmlFor="email" className="labelInput">Email</label>
                    </div>

                    <div className="inputBox">
                        <input type="password" name="senha" id="senha" className="inputUser" required />
                        <label htmlFor="senha" className="labelInput">Senha</label>
                    </div>

                    <button type="submit" name="submit" id="submit">Cadastre-se</button>

                    <a to="/cadastro">Entrar</a>

                </form>
            </div>
        </StyledCadastro>
    )
}