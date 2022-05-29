import List from "./components/List/component";
import { Header } from "./components/exporter";
import "./configStyles/globals.scss";
import buttons from "./pageData/menuButtons";
import DynamicInfo from "./components/DynamicInfo/component";
import list from "./pageData/list";
import cards from "./pageData/cards";

function App() {

  return (
    <>
      <Header buttons={buttons} />
      <DynamicInfo />
      <List songs={list} />
      <DynamicInfo dynamicInfo={{text: cards[0].name, img: cards[0].img}} />
    </>
  )
}

export default App
