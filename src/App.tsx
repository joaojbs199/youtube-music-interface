import { Header, SongList, DynamicInfo, CardList } from "./components/componentExporter";
import "./configStyles/globals.scss";
import { buttons, songs, cards } from "./dataToRender/dataExporter";

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
