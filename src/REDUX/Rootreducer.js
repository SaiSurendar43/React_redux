import {itemreducer} from '../REDUX/Redux.reducer'
import {combineReducers} from 'redux'

const rootreducer = combineReducers({item:itemreducer})

export {rootreducer}