import './App.css';
import Prueba from "./componentes/Prueba"
import Videoo from './componentes/Video';

function App() {
  return (
    <div>
      <head>
        <meta property="og:image" content="./1.png" />
      </head>
      <div className="jumbotron inner-header flex">
        <div className="container">
          <h2><span>♡ NOSOTROS ♡</span></h2>
          <h5 id="expertise">con mucho mucho amor</h5>
        </div>
        <div className="container">
          <div className="main">
            <div className="spacer">
              <div className="cards">
                <div className="tabla">
                  <Prueba foto="17" texto="Encuentro" />
                  <Prueba foto="4" texto="Tu primera vez en mi casita" />
                  <Prueba foto="1" texto="Nosotos" />
                  <Prueba foto="2" texto="Cheve" />
                  <Prueba foto="3" texto="Jalowin #1" />
                  <Prueba foto="5" texto="Jalowin #1 x2" />
                  <Prueba foto="6" texto="Bosquesito" />
                  <Prueba foto="7" texto="Juegando juntos" />
                  <Prueba foto="8" texto="Dios we" />
                  <Prueba foto="9" texto="Tu pumpe" />
                  <Prueba foto="10" texto="Jalowin #2" />
                  <Prueba foto="11" texto="Dibujazo" />
                  <Prueba foto="12" texto="Furry Time" />
                  <Prueba foto="13" texto="Valentine's Day" />
                  <Prueba foto="14" texto="Viarchat" />
                  <Prueba foto="15" texto="Rumorosa" />
                  <Prueba foto="16" texto="Sin filtro" />
                  <Prueba foto="18" texto="Wapos" />
                  <Prueba foto="19" texto="18/03/2023" />
                  <Prueba foto="20" texto="Roblots" />
                  <Prueba foto="21" texto="Po Po" />
                  <Prueba foto="22" texto="Vamonos de fiesta a factory" />
                  <Prueba foto="23" texto="Fusion ja" />
                  <Prueba foto="24" texto="Maica" />
                  <Prueba foto="25" texto="Bosquesito again" />
                  <Prueba foto="26" texto="Bonitos" />
                  <Prueba foto="27" texto="Año nuevo" />
                  <Prueba foto="28" texto="Twins" />
                  <Prueba foto="29" texto="Finos" />
                  <Prueba foto="30" texto="So" />
                  <Prueba foto="31" texto="Queseso Momentum" />
                  <Prueba foto="32" texto="Fachas" />
                  <Prueba foto="33" texto="burgir" />
                  <Prueba foto="34" texto="boblox" />
                  <Videoo video="1" texto="Aaaaaaaaaa" />
                  <Videoo video="2" texto="Video de yutub" />
                  <Videoo video="3" texto="Yeaaah" />
                  <Videoo video="4" texto="Filtro cagado de ig" />
                  <Videoo video="5" texto="Juventud 2000 - termina mal" />
                  <Videoo video="6" texto="tu ere pobre tu no tiene sansun" />
                  <Videoo video="7" texto="Otro video random" />
                  <Prueba foto="35" texto="Pachangona" />
                  <Prueba foto="36" texto="OXXO" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;