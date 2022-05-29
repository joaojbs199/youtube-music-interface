import SongList from "./components/SongList/component";
import { Header } from "./components/exporter";
import "./configStyles/globals.scss";
import buttons from "./pageData/menuButtons";
import DynamicInfo from "./components/DynamicInfo/component";
import songs from "./pageData/songs";
import cards from "./pageData/cards";
import CardList from "./components/CardList/component";
import Carrossel from "./components/Carrossel/component";

function App() {

  return (
    <>
      <Header buttons={buttons} />
      
      <DynamicInfo />

      <Carrossel>
        <SongList songs={songs} />
      </Carrossel>

      <DynamicInfo dynamicInfo={{text: cards[0].name, img: cards[0].img}} />
      
      <Carrossel>
        <CardList cards={cards} />
      </Carrossel>
    </>
  )
}

export default App
