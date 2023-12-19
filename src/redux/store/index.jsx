import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../../saga';
import rootReducer from '../reducers/countReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
