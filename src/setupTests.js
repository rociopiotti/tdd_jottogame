import '@testing-library/jest-dom';

// Enzyme
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// set up for enzyme adapter ( not official for react version 17)
Enzyme.configure({ adapter: new Adapter() });

