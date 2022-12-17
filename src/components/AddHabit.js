import styled from "styled-components"

export default function AddHabit(){

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]
    return(
        <BoxHabit>
            <input
            type="text"
            placeholder="nome do hábito"
            />
            <ButtonContainer>
                {weekdays.map((d) => (
                    <DayButton>{d}</DayButton>
                ))}
            </ButtonContainer>
            
            <CancellorSave>
                <h1>Cancelar</h1>
                <button>Salvar</button>
            </CancellorSave>
            
            
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
margin:4px;
`

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
`

