import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "./Congrats";
import { findByTestAttr } from "../../test/testUtils";

// set up for enzyme adapter ( not official for react version 17)
Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without errors", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component).toBe(1);
});

test('renders no text when "succes prop is false"', () => {});

test('renders non-empty congrats message when "success" is true', () => {});
