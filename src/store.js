import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from ".action";

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec } = bindActionCreators(actions, dispatch);

const update = () => {};

store.subscribe(update); //вызываем функцию update() когда обновился store
