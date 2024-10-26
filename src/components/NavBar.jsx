// import react from "react";
import styled from "styled-components";
import {FiArrowLeftCircle} from 'react-icons/fi';

const Modelo = styled.div`
    background-color: #445a6b;
    align-items:center;
    text-align:center;/
    &:hover {
        cursor: auto;
   }
   width:100%;
   height:100px;
   display:flex;
   justify-content:space-around;
   
`
const ContainerMaps = styled.div`
    display:flex;
    gap:20px;
`
const Botao = styled.a`
    background-color: rgba(157, 178, 191, 0);
    padding:1px;
    color: #DDE6ED;
	border: none;
	outline: inherit;
    border-radius:5px;
    font-weight:bold;
    gap: 2px;
    transition: 1s;
    &:hover {
        transform: scale(1.15);
        transition: 1s;
        cursor: pointer;
  }
`
// const Container = styled.div`
//     display:flex;
//     gap:5px;
//     flex-wrap:wrap;
//     justify-content:center;
// `
const ImagemBotao = styled.img`
    height:85px;
    width: auto;
    transition: 1s;
`
const Link = styled.a`
    background-color: #27374D;
    /* background-color:magenta; */
    font-family: 'Montserrat', sans-serif;
    padding:10px;
    color: #DDE6ED;
	border: none;
	outline: inherit;
    display:flex;
    align-items:center;
    border-radius:5px;
    font-size:20px;
    font-weight:bold;
    transition: 1s;
    text-align:center;
    gap:4px;
    text-decoration:none;
    &:hover {
        transform: scale(1.05);
        transition: 1s;
        cursor: pointer;
  }
  
`

export default function NavBar({setImagemFundo}) {
    return <Modelo className="NavBar"> 
        <Link href="/"><FiArrowLeftCircle/>Home</Link>
        <ContainerMaps className="ContainerMaps">
            <Botao onClick={() =>  setImagemFundo("https://cdn.discordapp.com/attachments/1120847328723611689/1121564394967535696/image.png")}><ImagemBotao className="ImageMaps" src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148533777633351/map_icon_de_ancient.png" alt="" /></Botao>
            <Botao onClick={() =>  setImagemFundo("https://cdn.discordapp.com/attachments/1120847328723611689/1121564791832588328/image.png")}><ImagemBotao className="ImageMaps" src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148563246829679/map_icon_de_anubis.png" alt="" /></Botao>
            <Botao onClick={() =>  setImagemFundo("https://cdn.discordapp.com/attachments/1120847328723611689/1121566889391443988/image.png")}><ImagemBotao className="ImageMaps" src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148621077893130/map_icon_de_dust2.png" alt="" /></Botao>
            <Botao onClick={() =>  setImagemFundo("https://cdn.discordapp.com/attachments/1120847328723611689/1121566340214435851/image.png")}><ImagemBotao className="ImageMaps" src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148643588710481/map_icon_de_inferno.png" alt="" /></Botao>
            <Botao onClick={() =>  setImagemFundo("https://cdn.discordapp.com/attachments/1120847328723611689/1121568567851229314/image.png")}><ImagemBotao className="ImageMaps" src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148666120519720/map_icon_de_mirage.png" alt="" /></Botao>
            <Botao onClick={() =>  setImagemFundo("https://cdn.discordapp.com/attachments/1120847328723611689/1121566470162354256/image.png")}><ImagemBotao className="ImageMaps" src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148691412156436/map_icon_de_nuke.png" alt="" /></Botao>
            <Botao onClick={() =>  setImagemFundo("https://cdn.discordapp.com/attachments/1120847328723611689/1121566565196902420/image.png")}><ImagemBotao className="ImageMaps" src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148717215535174/map_icon_de_overpass.png" alt="" /></Botao>
            <Botao onClick={() =>  setImagemFundo("https://media.discordapp.net/attachments/1120847328723611689/1121566734151864340/image.png?width=531&height=530")}><ImagemBotao className="ImageMaps" src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148747041222676/map_icon_de_vertigo.png" alt="" /></Botao>
        </ContainerMaps>
        <img className="ImageGames" src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/03/21/csgo-new-logo-counter-strike.jpg" alt="" />       
    </Modelo>
}