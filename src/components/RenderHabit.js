import { useEffect, useState } from "react"
import styled from "styled-components"
import iconCheck from '../assets/iconCheck.png'
import { selectedColor } from "../styles/colors";

export default function RenderHabit({habit, changeCheck, isSelected}){
    const [status, setStatus] = useState(habit.done)
    const [concluded, setConcluded] = useState([])

    console.log(concluded)


    useEffect(() => {
        if (isSelected) {
            setStatus(true)
        } else {
            setStatus(false)
        }
    }, [isSelected])
    
return(
    
    <BoxHabit data-test="today-habit-container" >
    <StyledHabit>
        <h1 data-test="today-habit-name">{habit.name}</h1>
        <h2 data-test="today-habit-sequence">Sequência atual: {habit.currentSequence}</h2>
        <h2 data-test="today-habit-record">Seu recorde: {habit.highestSequence}</h2>
    </StyledHabit>
    <Check onClick={() => changeCheck(habit)} status={status}>
        <img src={iconCheck} alt="check" data-test="today-habit-check-btn"/>
    </Check>
    </BoxHabit>
)
}

const BoxHabit = styled.div`
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
justify-content:space-between;
margin-bottom: 10px;
`

const StyledHabit = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
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
    h2{
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`
const DayHabit = styled.div`
   display:flex;
   flex-direction:column;
    margin-top:22px;
    margin-bottom:28px;
    h1{
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h2{
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA; 
    }
`

const Container = styled.div`
background: #E5E5E5;
display:flex;
flex-direction:column;
padding:0 18px;
background-color:#E5E5E5;
height: 100vh;
width:100%;
margin-top: 70px;
span{
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
}
`
const Check = styled.div`
width: 69px;
height: 69px;
background-color:  ${props => selectedColor[props.status].background};
border: 1px solid #E7E7E7;
border-radius: 5px;
display:flex;
align-items:center;
justify-content:center;
margin:13px 13px;
`