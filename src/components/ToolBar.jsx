// import react from "react";
import styled from "styled-components";


const Modelo = styled.div`
    background-color:#526D82;
    height:auto;
    min-width:260px;
    max-width:260px;
    height:607px;
    gap:30px;
    &:hover {
        cursor: auto;
  }
  display:flex;
  justify-content:space-around;
  
`

const Container = styled.div`
    display:flex;
    gap:8px;
    flex-wrap:wrap;
    justify-content:center;
`

const BotaoThickness = styled.button`
    background-color: #27374D;
    /* background-color:magenta; */
    font-family: 'Montserrat', sans-serif;
    padding:10px;
    color: #DDE6ED;
	border: none;
	outline: inherit;
    border-radius:5px;
    font-weight:bold;
    transition: 1s;
    text-align:center;
    &:hover {
        transform: scale(1.1);
        transition: 1s;
        cursor: pointer;
  }
`

const BotaoCores = styled.button`
    transition: 1s;
    height:60px;
    width:60px;
    border-radius:5px;
    transition: 1s;
    &:hover {
        transform: scale(1.1);
        transition: 1s;
        cursor: pointer;
  }
`

export default function ToolBar({Cor, Espessura,  setCor ,setEspessura,setLinha,handleClearCanvas }) {
    return <Modelo className="ToolBar">
        <Container className="Shape">
            {/* <BotaoThickness onClick={ () => setLinha("butt")}>Butt</BotaoThickness> */}
            <BotaoThickness onClick={ () => setLinha("round") }>ROUND</BotaoThickness>
            <BotaoThickness onClick={ () => setLinha("square") }>SQUARE</BotaoThickness>
            
        </Container>
        <Container className="ContainerTexto">
            <input className="TextoGrossura" type="number" value={ Espessura } onChange={ e => setEspessura(e.target.value) }></input><b>px</b> 
        </Container>
        <Container>
            <input className="Cores" type="color" value={Cor} placeholder="#f1f1f1" onChange={ e => setCor(e.target.value) }/>
        </Container>
        <Container>
            <BotaoCores onClick={ () => setCor("#720474") } className="Roxo"></BotaoCores>
            <BotaoCores onClick={ () => setCor("#e9e803") } className="Amarelo"></BotaoCores>
            <BotaoCores onClick={ () => setCor("#6593ca") } className="Azul"></BotaoCores>
            <BotaoCores onClick={ () => setCor("#088446") } className="Verde"></BotaoCores>
            <BotaoCores onClick={ () => setCor("#dd4f06") } className="Laranja"></BotaoCores>
            <BotaoCores onClick={ () => setCor("#f1f1f1") } className="Branco"></BotaoCores>
        </Container>  
    </Modelo>
}