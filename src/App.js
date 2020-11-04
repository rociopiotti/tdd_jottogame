import { connect } from "react-redux";
import "./App.css";
import GeuessedWords from "./components/GuessedWords/GuessedWords";
import Congrats from "./components/Congrats/Congrats";
import {getSecretWord} from "./store/actions/index";
import Input from "./components/Input/Input";

const App = ({ success, guessedWords, secretWord }) => {
  return (
    <div className='container'>
      <h1>Jotto Game</h1>
      <Congrats success={success} />
      <Input />
      <GeuessedWords guessedWords={guessedWords} />
    </div>
  );
};

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(App);
