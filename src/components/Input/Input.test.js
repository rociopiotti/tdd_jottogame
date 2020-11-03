import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper
};

describe("render", () => {
  describe("Word has not been guessed", () => {
    test("renders without error", () => {});
    test("renders input box", () => {});
    test("renders submit button", () => {});
  });
  describe("Word has been guessed", () => {
    test("does not renders without error", () => {});
    test("does not renders input box", () => {});
    test("does not renders submit button", () => {});
  });
});

describe("update state", () => {});
