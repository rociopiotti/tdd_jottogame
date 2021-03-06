import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not a warning with expectec props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renderes without error", () => {
    const component = findByTestAttr(wrapper, "component-guest-words");
    expect(component.length).toBe(1);
  });
  test("renders instruction to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instruction");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("If there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renderes without error", () => {
    const component = findByTestAttr(wrapper, "component-guest-words");
    expect(component.length).toBe(1);
  });
  test("renderes guessed words section", () => {
    const guessedWords = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWords.length).toBe(1);

  });
  test("correct number of guessed words", () => {
    const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(guessedWords.length);

  });
});
