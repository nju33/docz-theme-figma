import {createStore} from 'redux';
import {flux} from './flux';

export const store = createStore(flux.createReducer());
