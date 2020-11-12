import React from "react";
import { shallow } from "enzyme";
import enableHooks from "jest-react-hooks-shallow";

import { storeFactory } from "./test/testUtils";
import App from "./App";
import UnconnectedApp from "./App";

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
    const getSecretWordProp = wrapper.props().getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

// TODO: TEST ACTIONS IN APP 
// describe("actions dispatch", () => {
//   const getSecretWordMock = jest.fn();

//   const props = {
//     getSecretWord: getSecretWordMock,
//     success: true,
//     guessedWords: []
//   };
//   const store = storeFactory();

//   React.useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

//   // set up app component with getSecretWordMock as the getSecretWord prop
//   const wrapper = shallow(<UnconnectedApp {...props} store={store}/>);

//   // check to see if our mock ran
//   const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

//   expect(getSecretWordCallCount).toBe(1);
// });
