import {combineReducers} from 'redux'
import permitsReducer from "./permitsReducer";

const rootReducer = combineReducers({
    permits: permitsReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;