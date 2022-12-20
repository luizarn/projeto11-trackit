
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
            required
            />
            
            <ButtonContainer>
                {weekdays.map((d, i) => (  
                    <DaysButtons
                    data-test="habit-day"
                    disabled={(loader === true) ? true : false}
                    chooseDay={chooseDay}
                    isSelected={days.some((s) => s === i)}
                    key={i}
                    d={d}
                    index={i}/>
                ))}
            </ButtonContainer>
            
            <CancellorSave>
                <h1 data-test="habit-create-cancel-btn" onClick={() => setAdd(false)}>Cancelar</h1>
                {loader ? (
                <button type="submit" disabled="disabled" data-test="habit-create-save-btn">  <img src={loading} alt="loading"/></button>) : (
                <button type="submit" data-test="habit-create-save-btn">Salvar</button>)}
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

// const DayButton = styled.div`
// width: 30px;
// height: 30px;
// background-color: ${props => dayColors[props.status].background};
// border-radius: 5px;
// border: 1px solid #D5D5D5;
// color: ${props => dayColors[props.status].color};
// font-weight: 400;
// font-size: 19.976px;
// line-height: 25px;
// display:flex;
// justify-content:center;
// align-items:center;
// margin:4px;
// `

const CancellorSave = styled.div`
display:flex;
justify-content: flex-end;
align-items:center;
margin-top:20px;
margin-right:16px;
    h1{
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
    }
    button{
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
        margin-left:23px;
    }
    img{
        width: 51px;
        height: 40px;
    }
`

