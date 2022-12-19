import styled from "styled-components"
import Trash from '../assets/trashcan.png'
import { useState, useContext, useEffect } from "react";
import AuthorizationContext from '../contexts/AuthorizationContext'
import axios from 'axios'
import DaysButtons from "./DaysButtons";
import { useNavigate } from "react-router-dom";

export default function MyHabits({setAdd}){
const [habitsMade, setHbaitsMade] = useState(undefined)
const [token, setToken] = useContext(AuthorizationContext)
const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]
const navigate = useNavigate()

function refreshHabits(){
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const promise = axios.get(URL, 
        {headers: 
            {Authorization : `Bearer ${token}`}
        })
    promise.then(res => setHbaitsMade(res.data))     

    promise.catch(err => console.log(err.response.data)) 


}
 refreshHabits()


    function deleteHabit(idhabito){
       if (window.confirm("Você tem certeza que quer excluir esse hábito?")){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idhabito}`
   const promise = axios.delete(URL, {headers: {Authorization : `Bearer ${token}`}})
   promise.then(res => {
    console.log(res.data, "deu certo!")
    refreshHabits()}
    )  
   promise.catch(err => console.log(err.response.data))  
       }
    }


    if (habitsMade === undefined) {
        return  (
        <span>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear
    </span> )
    } else {
        return(
            <>
            {habitsMade.map((h, i) => (
                        <BoxHabit key={h.id}>
                        <StyledBox key={i}>
                            <h1>{h.name}</h1>
                            <img src={Trash} alt="lixeira" onClick={() => deleteHabit(h.id)}/>
                        </StyledBox>
                        <ButtonContainer>
                            {weekdays.map((d, i) => (
                                <DaysButtons
                                isSelected={h.days.some((s) => s === i)}
                                key={i}
                                d={d}
                                index={i}/>
                            ))}
                        </ButtonContainer>
                    </BoxHabit>
            )
            
            )}
           
            </>
        )
}
}

const BoxHabit = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
flex-direction: column;
margin-bottom: 10px;
`
const ButtonContainer = styled.div`
display:flex;
justify-content:flex-start;
padding-left: 15px;
padding-top: 8px;
`

const DayButton = styled.div`
width: 30px;
height: 30px;
background: #FFFFFF;
border-radius: 5px;
border: 1px solid #D5D5D5;
color: #DBDBDB;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
display:flex;
justify-content:center;
align-items:center;
margin:2px;
`

const StyledBox = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
margin-top:13px;
margin-right:10px;
margin-left:15px;
    h1{
        font-size: 18px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
`

