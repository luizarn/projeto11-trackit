import Navbar from "../components/NavBar";
import styled from "styled-components";
import Footer from "../components/Footer";
import AddHabit from "../components/AddHabit";
import MyHabits from "../components/MyHabits";

export default function HabitScreen(){
    return(
        <>
   
        <Navbar/>
        <Container>
            <DivAddHabit>
                <h1>Meus hábitos</h1>
                <AddButton>+</AddButton>
            </DivAddHabit>

            {/* <AddHabit/> */}
            <MyHabits/>

            {/* <span>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear
            </span> */}
        </Container>
        <Footer/>
        </>
    )
}

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

const DivAddHabit = styled.div`
   display:flex;
    justify-content: space-between;
    align-items:center;
    margin-top:22px;
    margin-bottom:28px;
    h1{
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
`

const AddButton = styled.button`
width: 40px;
height: 35px;
background-color: #52B6FF;
border-radius: 4.63636px;
font-weight: 400;
font-size: 26.976px;
line-height: 34px;
color: #FFFFFF;
display:flex;
align-items: center;
justify-content:center;
border:none;
`

