import {combineReducers} from 'redux'
import { featuresReducer } from '../reducers/featuresReducer'


console.log(featuresReducer)

export const rootReducer = combineReducers ({ 
       featuresReducer
})