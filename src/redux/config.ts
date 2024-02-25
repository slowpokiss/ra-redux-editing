import { combineReducers, legacy_createStore, compose } from "redux";
import formReducer from "./formReducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function config() {
  return legacy_createStore(
    combineReducers({
      form: formReducer,
    }),
    composeEnhancers()
  );
}

export default config;
