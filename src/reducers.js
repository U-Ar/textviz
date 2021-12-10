import { combineReducers } from 'redux';

import textlist from "./textlist"
import textitem from "./textitem"

const rootReducer = combineReducers({
    textlist: textlist.reducer,
    textitem: textitem.reducer,
})

export default rootReducer;