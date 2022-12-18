import styled from "styled-components";
import ImageContext from '../contexts/ImageContext'
import { useContext } from 'react'

export default function Navbar(){
const [imageProfile, setImageProfile] = useContext(ImageContext)

return(
<NavContainer>
    <h1>TrackIt</h1>
    <img src={imageProfile} alt="imagem"/>
</NavContainer>
)
}

const NavContainer = styled.div`
width: 375px;
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
justify-content: space-between;
align-items:center;
padding:0 18px;
h1{
    font-family: 'Playball';
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
}
img{
    width: 51px;
    height: 51px;
}

`