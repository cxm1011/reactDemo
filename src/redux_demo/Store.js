import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
  'First': 11,
  'Second': 12,
  'Third': 13
};

const store = createStore(reducer,initValues);

export default store;