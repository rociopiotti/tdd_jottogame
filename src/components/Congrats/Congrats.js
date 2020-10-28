import React from "react";

const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='component-message'>
          Congratulations ! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test='component-congrats'/>;
  }
};


export default Congrats;
