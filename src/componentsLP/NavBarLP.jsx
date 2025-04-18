// import react from "react";
import styled from "styled-components";

const Modelo = styled.div`
   background: rgb(0,0,0);
    background: linear-gradient(180deg, #203647 11%, rgba(0,212,255,0) 100%);
    align-items:center;
    color:#eee;
    font-size:25px;
   width:100%;
   height:100px;
   display:flex;
   justify-content:space-around;
    position:absolute;
    top:0;
    left:0;
`
const Container = styled.div`
    display:flex;
    justify-content: center;
    gap:25px;
    /* margin-right:15%; */
`
export default function NavBarLP() {
    return <Modelo className="NavBar"> 
        <Container>
            <h1>TACTICAL BLUEPRINT</h1>
        </Container>
    </Modelo>
}