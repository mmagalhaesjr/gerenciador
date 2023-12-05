import { StyledLogin } from "./styled";



import logo from '../../assets/1.png'

export default function Login() {
    return (
        <StyledLogin>
            <div id="container">

            <img src={logo} alt="" />

          


                <form>

                    <div className="inputBox">
                        <input type="text" name="email" id="email" className="inputUser" required/>
                        <label htmlFor="email" className="labelInput">Email</label>
                    </div>

                    <div className="inputBox">
                        <input type="password" name="senha" id="senha" className="inputUser" required />
                        <label htmlFor="senha" className="labelInput">Senha</label>
                    </div>

                    <button type="submit" name="submit" id="submit">Entrar</button>

                    <a to="/cadastro">Cadastre-se</a>

                </form>
            </div>
        </StyledLogin>
    )
}