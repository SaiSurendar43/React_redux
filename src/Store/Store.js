import {  createStore } from 'redux';
import { rootreducer } from '../REDUX/Rootreducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootreducer, composeWithDevTools());


export { store };
