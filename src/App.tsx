import List from "./components/List/component";
import { Header } from "./components/exporter";
import "./configStyles/globals.scss";
import buttons from "./pageData/menuButtons";
import DinamicInfo from "./components/DinamicInfo/component";
import list from "./pageData/list";
import cards from "./pageData/cards";

function App() {

  return (
    <>
      <Header buttons={buttons} />
      <DinamicInfo text1="ALGUMAS MÚSICAS PARA VOCÊ COMEÇAR" text2="Olá, João Batista da Silva" />
      <List songs={list} />
      <DinamicInfo text1="ALGUMAS MÚSICAS PARA VOCÊ COMEÇAR" text2={cards[0].name} img={cards[0].img} />
    </>
  )
}

export default App
