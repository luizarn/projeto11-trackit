import logo from '../assets/logo.png'
import styled from "styled-components"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import loading from '../assets/loading.gif'

export default function SignUpScreen(){

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [name, setName] = useState("")
const [image, setImage] = useState("")
const [logged, setLogged] = useState(false)
const navigate = useNavigate()

function addUser(e){
    e.preventDefault()
    setLogged(true)
    const informations = {  
        email: email,
        name: name,
        image: image,
        password: password
    }
    const url_post = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    const promise = axios.post(url_post, informations)

    promise.then(res => {
        console.log(res)
        navigate("/")
    })
    promise.catch(err => {
        alert(err.response.data.message)
        setLogged(false)
        setName("")
        setPassword("")
        setImage("")
        setEmail("")
    })

}





    return(
        <ScreenContainer>
            <Logo src={logo}/>
            <Form onSubmit={addUser}>
            <input
            data-test="email-input"
            disabled={logged? "disabled" : ""}
            type="text"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            />

            <input
            data-test="password-input"
            disabled={logged? "disabled" : ""}
            type="text"
            placeholder="senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            />

            <input
            data-test="user-name-input"
            disabled={logged? "disabled" : ""}
            type="text"
            placeholder="nome"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            />

            <input
            data-test="user-image-input"
            disabled={logged? "disabled" : ""}
            type="text"
            placeholder="foto"
            value={image}
            onChange={e => setImage(e.target.value)}
            required
            />
            
            {!logged ? (
            <RegisterButton data-test="signup-btn" type="submit">Cadastrar</RegisterButton>
           ) : (
            <RegisterButton data-test="signup-btn" type="submit">
            <img src={loading} /> </RegisterButton>
            )} 

           
            <Link data-test="login-link" to={"/"}>
            <p>Já tem uma conta? Faça login!</p>
            </Link>
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

const RegisterButton = styled.button`
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
    img{
        width: 51px;
        height: 40px;
    }
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
