import SongList from "./components/SongList/component";
import { Header } from "./components/exporter";
import "./configStyles/globals.scss";
import buttons from "./pageData/menuButtons";
import DynamicInfo from "./components/DynamicInfo/component";
import songs from "./pageData/songs";
import cards from "./pageData/cards";
import CardList from "./components/CardList/component";

function App() {

  return (
    <>
      <Header buttons={buttons} />
      <DynamicInfo />
      <SongList songs={songs} />
      <DynamicInfo dynamicInfo={{text: cards[0].name, img: cards[0].img}} />
      <CardList cards={cards} />
    </>
  )
}

export default App
