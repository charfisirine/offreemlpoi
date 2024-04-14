import { configureStore , combineReducers} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { candidatSaga } from '../Components/Condidat/candidatSaga';
import {candidatSlice} from '../Components/Condidat/candidatSlice';
import { recruteurSagaSaga } from '../Components/Recruteur/recruteurSaga';
import { recruteurSlice } from '../Components/Recruteur/recruteurSlice';


// Create a saga middleware

const rootReducers = combineReducers({
    // Add  reducers here
    candidat: candidatSlice.reducer,
    recruteur:recruteurSlice.reducer

  });

const rootSagas = function* rootSaga() {
    yield all([
        candidatSaga.saga(),
        recruteurSagaSaga.saga()
        
    ])
}

const sagaMiddleware = createSagaMiddleware(); 

export const store = configureStore({
    reducer: rootReducers,
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSagas);
