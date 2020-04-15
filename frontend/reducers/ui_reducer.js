import {combineReducers} from 'redux';

import loadingReducer from './loading_reducer';
import savedReducer from './save_property_reducer';

export default combineReducers({
    loading:loadingReducer,
    saved: savedReducer,
})