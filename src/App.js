import "./App.css";
import GeuessedWords from "./components/GuessedWords/GuessedWords";
import Congrats from "./components/Congrats/Congrats";

const App = () => {
  return (
    <div className='container-sm'>
      <h1>Jotto Game</h1>
      <Congrats success={true} />
      <GeuessedWords
        guessedWords={[{ guessedWord: "trains", letterMatchCount: 3 }]}
      />
    </div>
  );
};

export default App;
