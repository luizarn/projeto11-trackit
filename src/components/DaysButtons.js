import { useEffect, useState } from "react";
import styled from "styled-components";
import { dayColors } from "../styles/colors";

export default function Habit({isSelected, d, chooseDay, index, disabled}){

const [status, setStatus] = useState("available")


useEffect(() => {
    if (isSelected) {
        setStatus("selected")
    } else {
        setStatus("available")
    }
}, [isSelected])

    return(
            <DayButton  
            data-test="habit-day"
            onClick={() => chooseDay(index)}
            status={status}
            disabled={disabled}>
                {d}
            </DayButton>
    )
}


const DayButton = styled.div`
width: 30px;
height: 30px;
background-color: ${props => dayColors[props.status].background};
border-radius: 5px;
border: 1px solid #D4D4D4;
color: ${props => dayColors[props.status].color};
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
display:flex;
justify-content:center;
align-items:center;
margin:4px;
`