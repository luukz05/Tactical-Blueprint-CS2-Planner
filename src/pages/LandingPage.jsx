import NavBarLP from "../componentsLP/NavBarLP";
import styled from "styled-components";

const Modelo = styled.div`
  background: rgb(23, 36, 51);
  /* background: linear-gradient(180deg, rgba(23,36,51,1) 0%, rgba(35,105,130,1) 100%); */

  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
const Barra = styled.div`
  /* background-color: #5c0404; */
  background-image: url("https://images8.alphacoders.com/736/736302.png");
  height: 85vh;
  width: 100%;
  font-weight: bold;
  background-size: cover;
  color: #ffffff;
  background-attachment: fixed;
  font-size: 125px;
  display: flex;
  background-position: top;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Mapas = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  /* margin:50px; */
  background-color: #27374d;
  gap: 50px;
  row-gap: 0;
  width: 1100px;
  height: 500px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 15px;
  flex-wrap: wrap;
`;
const ImagemBotao = styled.img`
  height: 160px;
  padding: 25px;
  width: auto;
  transition: 1s;

  &:hover {
    transform: scale(1.25);
    transition: 1s;
    cursor: pointer;
  }
`;
const LinkCanvas = styled.a`
  font-size: 30px;
  color: #ffffff;
  background-color: #9db2bfb0;
  text-decoration: none;
  text-justify: center;
  padding: 10px;
  border-radius: 10px;
  transition: 1s;
  &:hover {
    transform: scale(1.1);
    transition: 1s;
    cursor: pointer;
  }
`;
const BGButton = styled.div`
  border-radius: 15px;
  margin-bottom: 0;
`;
const Teste = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  margin: 10px;
  gap: 15px;
  margin-top: 35px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  flex-direction: column;
`;
const TituloSection = styled.label`
  color: #eee;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;
const TituloSection2 = styled.label`
  color: #eeeeee;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  background-color: magenta;
  background-image: url(https://skinsmonkey.com/blog/wp-content/uploads/sites/2/csgo-wallpaper-full-1-scaled.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 93.5%;
  padding: 50px;
  height: 110vh;
  margin: 0;
  margin-bottom: 0;
`;
export default function LandingPage() {
  return (
    <Modelo style={{ overflow: "auto", cursor: "auto" }}>
      <Teste>
        <Barra>
          <NavBarLP />
          PLAN YOUR GAMES
          <LinkCanvas href="/canvas">GO TO PLANNER</LinkCanvas>
        </Barra>
      </Teste>
      <Content>
        <TituloSection>
          MAPS AVALIABLE
          <Mapas style={{ marginTop: "45px", marginBottom: "15px" }}>
            <BGButton className="BGAncient">
              <ImagemBotao
                className="ImageMaps"
                src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148533777633351/map_icon_de_ancient.png"
                alt=""
              />
            </BGButton>
            <BGButton className="BGAnubis">
              <ImagemBotao
                className="ImageMaps"
                src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148563246829679/map_icon_de_anubis.png"
                alt=""
              />
            </BGButton>
            <BGButton className="BGDust2">
              <ImagemBotao
                className="ImageMaps"
                src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148621077893130/map_icon_de_dust2.png"
                alt=""
              />
            </BGButton>
            <BGButton className="BGInferno">
              <ImagemBotao
                className="ImageMaps"
                src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148643588710481/map_icon_de_inferno.png"
                alt=""
              />
            </BGButton>
            <BGButton className="BGMirage">
              <ImagemBotao
                className="ImageMaps"
                src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148666120519720/map_icon_de_mirage.png"
                alt=""
              />
            </BGButton>
            <BGButton className="BGNuke">
              <ImagemBotao
                className="ImageMaps"
                src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148691412156436/map_icon_de_nuke.png"
                alt=""
              />
            </BGButton>
            <BGButton className="BGOverpass">
              <ImagemBotao
                className="ImageMaps"
                src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148717215535174/map_icon_de_overpass.png"
                alt=""
              />
            </BGButton>
            <BGButton className="BGVertigo">
              <ImagemBotao
                className="ImageMaps"
                src="https://cdn.discordapp.com/attachments/1120847328723611689/1121148747041222676/map_icon_de_vertigo.png"
                alt=""
              />
            </BGButton>
          </Mapas>
        </TituloSection>

        <TituloSection>
          {" "}
          PLANNER FUNCTIONALITIES
          <div>
            <img
              src="./gif.gif"
              width="1100"
              alt=""
              height="500"
              style={{
                borderRadius: "15px",
                marginTop: "49px",
                marginBottom: "15px",
              }}
            />
          </div>
        </TituloSection>
      </Content>

      <TituloSection2>
        {" "}
        HOW TO USE THE PLANNER
        <div>
          <iframe
            width="1100"
            height="621"
            style={{ borderRadius: "15px", marginTop: "49px" }}
            src="https://www.youtube.com/embed/AndfBvQjMxQ?rel=0"
            title="Demo Tactical Blueprint - Pistol Mirage"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <LinkCanvas href="/canvas">GO TO PLANNER</LinkCanvas>
      </TituloSection2>
    </Modelo>
  );
}
