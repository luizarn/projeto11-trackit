import logo from '../assets/logo.png'
import styled from "styled-components"

export default function WelcomeScreen(){

    return (
        <ScreenContainer>
            <Logo src={logo}/>
            <Form>
            <input
            type="text"
            placeholder="email"
            />
            <input
            type="text"
            placeholder="senha"
            />
            <OpenButton >Entrar</OpenButton>
            <p>Não tem uma conta? Cadastra-se!</p>
            </Form>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        p{
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        }
`
const Logo = styled.img`
    width: 180px;
    height:178.38px;
    margin-bottom: 25px;
    margin-top: 68px;
`

const OpenButton = styled.button`
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 303px;
    height: 45px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    border:none;
    margin-bottom:25px;
`

const Form = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    margin: 36px 0;
    button {
        align-self: center;
    }
    input {
        align-self: center;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        font-size: 18px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        margin-bottom: 6px;
            ::placeholder{
        color: #DBDBDB;
        }
    }
    `