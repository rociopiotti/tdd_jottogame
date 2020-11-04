import checkPropsTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../store/reducers/configureStore";
import rootReducer from "../store/reducers";

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropsTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
