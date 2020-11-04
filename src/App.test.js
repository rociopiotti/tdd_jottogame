import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "./test/testUtils";
import App from "./App";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
};

// redux props
describe("redux props", () => {
  test("Has access to succes prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.props().success;
    expect(successProp).toBe(success);
  });
  test("Has access to secretWord prop", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.props().secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test("Has access to guessedWords prop", () => {
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProps = wrapper.props().guessedWords;
    expect(guessedWordsProps).toEqual(guessedWords);
  });
  test("`getSecretWord` action creator is a function on the prop", () => {
      const wrapper = setup();
      const getSecretWordProp = wrapper.props().getSecretWord
    expect(getSecretWordProp).toBeInstanceOf(Function);      
  });
});
