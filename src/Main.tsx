import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import RootProvider from './state/store';
import rootReducer from './state/reducers';
import rootSaga from './state/sagas';
import { initialState } from './state';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  name: 'Redbook Inspect Blog',
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const Main: React.FC = () => (
  <RootProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RootProvider>
);

export default Main;
