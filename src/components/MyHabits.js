import styled from "styled-components"
import Trash from '../assets/trashcan.png'

export default function MyHabits(){

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]
    return(
        <>
        <BoxHabit>
            <StyledBox>
                <h1>Ler 1 capítulo de livro</h1>
                <img src={Trash} alt="lixeira" />
            </StyledBox>
            <ButtonContainer>
                {weekdays.map((d) => (
                    <DayButton>{d}</DayButton>
                ))}
            </ButtonContainer>
        </BoxHabit>

        <BoxHabit>
        <StyledBox>
            <h1>Ler 1 capítulo de livro</h1>
            <img src={Trash} alt="lixeira" />
        </StyledBox>
        <ButtonContainer>
            {weekdays.map((d) => (
                <DayButton>{d}</DayButton>
            ))}
        </ButtonContainer>
        </BoxHabit>

        <BoxHabit>
                <StyledBox>
                <h1>Ler 1 capítulo de livro</h1>
                <img src={Trash} alt="lixeira" />
            </StyledBox>
            <ButtonContainer>
                {weekdays.map((d) => (
                    <DayButton>{d}</DayButton>
                ))}
            </ButtonContainer>
        </BoxHabit>
        </>
    )
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

