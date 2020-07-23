import { combineReducers, createStore, applyMiddleware,  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { mainReducer }  from './reducer/mainReducer'
import { mapReducer } from './reducer/mapReducer'

 let reducers = combineReducers({
	 root: mainReducer,
	 map: mapReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store