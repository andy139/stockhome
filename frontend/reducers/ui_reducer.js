import {combineReducers} from 'redux';

import loadingReducer from './loading_reducer';
import savedReducer from './save_property_reducer';
import modalReducer from './modal_reducer';
import cartReducer from './cart_reducer';
import bidReducer from './curr_bid_reducer';

export default combineReducers({
    loading:loadingReducer,
    saved: savedReducer,
    modal: modalReducer,
    cart: cartReducer,
    bids: bidReducer,
})