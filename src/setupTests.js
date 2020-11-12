import "@testing-library/jest-dom";
import enableHooks from 'jest-react-hooks-shallow';
// Enzyme
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// set up for enzyme adapter ( not official for react version 17)
Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

enableHooks(jest);