import React, { useState } from "react";
import { connect } from "react-redux";

import { guessWord } from "../../store/actions/index";

export const UnconnectedInput = ({ success, guessWord }) => {
  const [currentGuess, setCurrentGuess] = useState(null);

  const submitGuessedWord = (event) => {
    // TODO: TEST ERROR: TypeError: Cannot read property 'preventDefault' of undefined
    // event.preventDefault();
    const guessedWord = currentGuess;
    // if (guessedWord && guessedWord.length > 0) {
      guessWord(guessedWord);
    // }
  };

  const contents = success ? null : (
    <form className='form-inline'>
      <input
        data-test='input-box'
        className='mb-2 mx-sm-3'
        id='word-guess'
        type='text'
        value={currentGuess}
        onChange={(e) =>
          setCurrentGuess({ currentGuess: e.target.value })
        }
        placeholder='enter guess'
      />
      <button
        data-test='submit-button'
        className='btn btn-primary mb-2'
        type='submit'
        onClick={() => submitGuessedWord()}>
        Submit
      </button>
    </form>
  );
  return <div data-test='component-input'>{contents}</div>;
};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
