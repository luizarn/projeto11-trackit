import Navbar from "../components/NavBar";
import styled from "styled-components";
import Footer from "../components/Footer";


export default function HistoryScreen(){
    return(
        <>
   
        <Navbar/>
        <Container>
            <DivHistoric>
                <h1>Histórico</h1>
            </DivHistoric>


         <span>
         Em breve você poderá ver o histórico dos seus hábitos aqui!
            </span> 
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
margin-top: 70px;
span{
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
}
`

const DivHistoric = styled.div`
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



