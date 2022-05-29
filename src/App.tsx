import SongList from "./components/SongList/component";
import { Header } from "./components/exporter";
import "./configStyles/globals.scss";
import buttons from "./pageData/menuButtons";
import DynamicInfo from "./components/DynamicInfo/component";
import songs from "./pageData/songs";
import cards from "./pageData/cards";
import CardList from "./components/CardList/component";
import { CarrosselProvider } from "./components/Carrossel/component";

function App() {

  return (
    <>
      <Header buttons={buttons} />

      <DynamicInfo />

      <CarrosselProvider>
        <SongList songs={songs} />
      </CarrosselProvider>

      <DynamicInfo dynamicInfo={{text: cards[0].name, img: cards[0].img}} />
      
      <CarrosselProvider>
        <CardList cards={cards} />
      </CarrosselProvider>
    </>
  )
}

export default App
