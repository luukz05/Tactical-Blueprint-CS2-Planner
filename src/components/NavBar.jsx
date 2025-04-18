import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";

const Modelo = styled.div`
  background-color: #445a6b;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
`;

const ContainerMaps = styled.div`
  display: flex;
  gap: 20px;
`;

const Botao = styled.a`
  background-color: rgba(157, 178, 191, 0);
  padding: 1px;
  color: #dde6ed;
  border: none;
  outline: inherit;
  border-radius: 5px;
  font-weight: bold;
  gap: 2px;
  transition: 1s;
  &:hover {
    transform: scale(1.15);
    transition: 1s;
    cursor: pointer;
  }
`;

const ImagemBotao = styled.img`
  height: 85px;
  width: auto;
  transition: 1s;
`;

const Link = styled.a`
  background-color: #27374d;
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  color: #dde6ed;
  border: none;
  outline: inherit;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  transition: 1s;
  text-align: center;
  gap: 4px;
  text-decoration: none;
  &:hover {
    transform: scale(1.05);
    transition: 1s;
    cursor: pointer;
  }
`;

export default function NavBar({ setImagemFundo }) {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <Modelo className="NavBar">
      <Link href="/">
        <FiArrowLeftCircle />
        Home
      </Link>
      <ContainerMaps className="ContainerMaps">
        <Botao onClick={() => setImagemFundo(`${publicUrl}/mirage.png`)}>
          <ImagemBotao
            src={`${publicUrl}/map_icon_de_mirage.png`}
            alt="Mirage"
          />
        </Botao>
        <Botao onClick={() => setImagemFundo(`${publicUrl}/nuke.png`)}>
          <ImagemBotao src={`${publicUrl}/map_icon_de_nuke.png`} alt="Nuke" />
        </Botao>
        <Botao onClick={() => setImagemFundo(`${publicUrl}/overpass.png`)}>
          <ImagemBotao
            src={`${publicUrl}/map_icon_de_overpass.png`}
            alt="Overpass"
          />
        </Botao>
        <Botao onClick={() => setImagemFundo(`${publicUrl}/vertigo.png`)}>
          <ImagemBotao
            src={`${publicUrl}/map_icon_de_vertigo.png`}
            alt="Vertigo"
          />
        </Botao>
        <Botao onClick={() => setImagemFundo(`${publicUrl}/anubis.png`)}>
          <ImagemBotao
            src={`${publicUrl}/map_icon_de_anubis.png`}
            alt="Anubis"
          />
        </Botao>
        <Botao onClick={() => setImagemFundo(`${publicUrl}/ancient.png`)}>
          <ImagemBotao
            src={`${publicUrl}/map_icon_de_ancient.png`}
            alt="Ancient"
          />
        </Botao>
        <Botao onClick={() => setImagemFundo(`${publicUrl}/dust.png`)}>
          <ImagemBotao src={`${publicUrl}/map_icon_de_dust2.png`} alt="Dust2" />
        </Botao>
        <Botao onClick={() => setImagemFundo(`${publicUrl}/inferno.png`)}>
          <ImagemBotao
            src={`${publicUrl}/map_icon_de_inferno.png`}
            alt="Inferno"
          />
        </Botao>
      </ContainerMaps>
      <img
        className="ImageGames"
        src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/03/21/csgo-new-logo-counter-strike.jpg"
        alt="CSGO Banner"
      />
    </Modelo>
  );
}
