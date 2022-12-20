import styled from "styled-components"
import Trash from '../assets/trashcan.png'
import { useState, useContext } from "react";
import AuthorizationContext from '../contexts/AuthorizationContext'
import axios from 'axios'
import DaysButtons from "./DaysButtons";


export default function MyHabits({setAdd}){
const [habitsMade, setHbaitsMade] = useState(undefined)
const [token] = useContext(AuthorizationContext)
const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]

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
                        <BoxHabit key={h.id} data-test="habit-container">
                        <StyledBox key={i}>
                            <h1 data-test="habit-name">{h.name}</h1>
                            <img src={Trash} alt="lixeira" onClick={() => deleteHabit(h.id)} data-test="habit-delete-btn"/>
                        </StyledBox>
                        <ButtonContainer>
                            {weekdays.map((d, i) => (
                                <DaysButtons
                                data-test="habit-day"
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

