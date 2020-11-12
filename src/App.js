import React from "react";
import { connect } from "react-redux";
import "./App.css";

import GuessedWords from "./components/GuessedWords/GuessedWords";
import Congrats from "./components/Congrats/Congrats";
import Input from "./components/Input/Input";
import { getSecretWord } from "./store/actions/index";

export const UnconnectedApp = (props) => {
  React.useEffect(() => {
    props.getSecretWord();
  }, []);

  return (
    <div className='container'>
      <h1>Jotto</h1>
      <Congrats success={props.success} />
      <Input />
      <GuessedWords guessedWords={props.guessedWords} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
