import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Booking from 'data/Booking/reducers';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  routing: routerReducer,
  Booking,
  form: formReducer,
});

export default rootReducer;
