import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";

import { SessionState } from "./ducks/session/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import localStorage from "redux-persist/es/storage";

export interface ApplicationState {
  session: SessionState;
}

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["session"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
