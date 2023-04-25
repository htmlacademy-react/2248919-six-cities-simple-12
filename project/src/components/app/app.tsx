import Main from '../../pages/main/main';

type AppMain = {
  cardCount: number;
}

function App({cardCount}:AppMain): JSX.Element {
  return (
    <Main cardCount = {cardCount} />
  );
}

export default App;
