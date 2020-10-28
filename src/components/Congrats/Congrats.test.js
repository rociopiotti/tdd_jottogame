import React from "react";
import { shallow } from "enzyme";
import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from "../../test/testUtils";

// DEFAULT PROPS FOR TESTING
// Warning: Risky if props change in code then test passes becaus props are different
const defaultProps = { success: false };


// Setup function for wrapper @param {object} props @returns {ShalloWrapper}
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without errors", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test('renders no text when "succes" prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test('renders non-empty congrats message when "success" is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "component-message");
  expect(message.text().length).not.toBe(0);
});

test("does not  throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
