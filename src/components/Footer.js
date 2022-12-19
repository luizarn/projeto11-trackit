import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from '../assets/Ellipse.png'


export default function Footer(){
return(

<FooterContainer>
    <Link to={"/habitos"}>
    <h1>Hábitos</h1>
    </Link>
    <Link to={"/hoje"}>
    <IconFooter src={Icon}/>
    </Link>
    <Link to={"/historico"}>
    <h1>Histórico</h1>
    </Link>
</FooterContainer>
)
}

const FooterContainer = styled.div`
width: 375px;
height: 70px;
background-color: #FFFFFF;
display:flex;
justify-content: space-around;
align-items:center;
padding:0 18px;
position: fixed;
bottom:0;
h1{
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
}
`

const IconFooter = styled.img`
position: fixed;
bottom:0;
z-index:1;
/* left: 142px;
top: 566px;
bottom:0; */
`