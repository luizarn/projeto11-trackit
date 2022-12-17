import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/NavBar"
import iconCheck from '../assets/iconCheck.png'

export default function HabitTodayScreen(){

    return(
        <>
               <Navbar/>
        <Container>
            <DayHabit>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </DayHabit>
        
            <BoxHabit>
            <StyledHabit>
                <h1>Ler 1 capítulo de livro</h1>
                <h2>Sequência atual: 3 dias</h2>
                <h2>Seu recorde: 5 dias</h2>
            </StyledHabit>
            <Check>
                <img src={iconCheck} alt="check"/>
            </Check>
            </BoxHabit>

            <BoxHabit>
            <StyledHabit>
                <h1>Ler 1 capítulo de livro</h1>
                <h2>Sequência atual: 3 dias</h2>
                <h2>Seu recorde: 5 dias</h2>
            </StyledHabit>
            <Check>
                <img src={iconCheck} alt="check"/>
            </Check>
            </BoxHabit>

            <BoxHabit>
            <StyledHabit>
                <h1>Ler 1 capítulo de livro</h1>
                <h2>Sequência atual: 3 dias</h2>
                <h2>Seu recorde: 5 dias</h2>
            </StyledHabit>
            <Check>
                <img src={iconCheck} alt="check"/>
            </Check>
            </BoxHabit>
        </Container>
        <Footer/>
        </>
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
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
display:flex;
align-items:center;
justify-content:center;
margin:13px 13px;
`