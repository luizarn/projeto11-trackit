
import styled from "styled-components"
import axios from 'axios'
import AuthorizationContext from '../contexts/AuthorizationContext'
import { useState, useContext} from "react";
import loading from '../assets/loading.gif'
import DaysButtons from "./DaysButtons";

export default function AddHabit({setAdd}){

    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]

const [name, setName] = useState("")
const [days, setDays] = useState([])
const [loader, setLoader] = useState(false)
const [token] = useContext(AuthorizationContext)









 function chooseDay(i){
 
  const isSelected = days.some((s) => s === i)
        if (isSelected) {
                const unselect = window.confirm("tem certeza que quer retirar esse dia?")

                if (unselect) {
                    const newList = days.filter((s) => s !== i)
                    setDays(newList)
                    }
                }
        else{
            setDays([...days, i])
        }  
    }

function enviar(e){
    e.preventDefault()
    setLoader(true)
    const informations = { name, days }
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const promise = axios.post(URL, informations, {headers: {Authorization : `Bearer ${token}`}})
    promise.then(res => {
        console.log(res.data)
        setLoader(false)
        setName("")
        setDays([])
        setAdd(false)
        })     

    promise.catch(err => {
        alert(err.response.data.message)
        setLoader(false)
        }) 
}


    return(
        <BoxHabit data-test="habit-create-container">
           
            <form onSubmit={enviar}>
            <input
            data-test="habit-name-input"
            disabled={loader? "disabled" : ""}
            type="text"
            placeholder="nome do hábito"
            value={name}
            onChange={e => setName(e.target.value)}
            min={3}
            />
            
            <ButtonContainer>
                {weekdays.map((d, i) => (  
                    <DaysButtons
                    disabled={(loader === true) ? true : false}
                    chooseDay={chooseDay}
                    isSelected={days.some((s) => s === i)}
                    key={i}
                    d={d}
                    index={i}/>
                ))}
            </ButtonContainer>
            
            <CancellorSave>
                {loader ? (
                <CancellButton data-test="habit-create-cancel-btn" disabled="disabled">Cancelar</CancellButton>) : (
                    <CancellButton data-test="habit-create-cancel-btn" onClick={() => setAdd(false)}>Cancelar</CancellButton> 
                )}
                {loader ? (
                <SaveButton type="submit" disabled="disabled" data-test="habit-create-save-btn">  <img src={loading} alt="loading"/></SaveButton>) : (
                <SaveButton type="submit" data-test="habit-create-save-btn">Salvar</SaveButton>)}
            </CancellorSave>
            </form>
            
        </BoxHabit>
    )
}


const BoxHabit = styled.div`
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
flex-direction: column;
margin-bottom: 29px;
input{
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
        margin-top: 18px;
        color: #666666;
            ::placeholder{
        color: #DBDBDB;
            }
}
`
const ButtonContainer = styled.div`
display:flex;
justify-content:flex-start;
padding-left: 19px;
padding-top: 8px;
`

const CancellorSave = styled.div`
display:flex;
justify-content: flex-end;
align-items:center;
margin-top:20px;
margin-right:16px;
    img{
        width: 51px;
        height: 40px;
    }
`
const CancellButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 84px;
    height: 35px;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    background-color: #FFFFFF;
    border:none;
    border-radius: 5px;
    margin-left:15.5px;
`

const SaveButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 84px;
    height: 35px;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    background-color:#52B6FF;
    border:none;
    border-radius: 5px;
    margin-left:15.5px;
`

