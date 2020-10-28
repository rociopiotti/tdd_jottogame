import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let contents;
  if (guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instruction'>Try to guess the secret word!</span>
    );
  }
  return <div data-test='component-guest-words'>{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
