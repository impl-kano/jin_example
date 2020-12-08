import {configureStore} from '@reduxjs/toolkit';
import {usersSlice} from './Users/userSlice';

import createSagaMiddleware from 'redux-saga';
import mySaga from './Users/usersSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

// then run the saga
sagaMiddleware.run(mySaga);
