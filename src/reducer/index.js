import { combineReducers } from 'redux'
import movieState from './movieReducer'

const rootReducer = combineReducers({
    movieState
})
export default rootReducer