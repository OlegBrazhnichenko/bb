import {STEPS} from 'services/Booking';

const initialState = {
  booking: null,
  currentStep: STEPS.SUBURB_SELECT,
  selectedLocation: null,
  category: null,
  service: null,
  services: null,
  loading: false,
  time: null,
  address: null,
  date: null,

};

export default function Booking(state = initialState, action) {
  switch (action.type) {
    case "SET_BOOKING_TYPE" :
      return {
        ...state,
        booking: action.data.booking
      };

    case "SET_STEP" :
      return {
        ...state,
        currentStep: action.data.step
      };

    case "SET_LOCATION" :
      return {
        ...state,
        selectedLocation: action.data.location
      };

    case "SET_CATEGORY" :
      return {
        ...state,
        category: action.data.category
      };

    case "SET_TIME" :
      return {
        ...state,
        time: action.data.time
      };

    case "SET_DATE" :
      return {
        ...state,
        date: action.data.date
      };

    case "SET_ADDRESS" :
      return {
        ...state,
        address: action.data.address
      };

    case "SET_SERVICE" :
      return {
        ...state,
        service: action.data.service
      };

    case "GET_SERVICES" :
      return {
        ...state,
        loading: true,
      };


    case "GET_SERVICES_SUCCESS" :
      return {
        ...state,
        services: action.payload.data,
        loading: false,
      };

    case "GET_SERVICES_FAIL" : {
      return {
        ...state,
        loading: false,
      };
    }
    case "GET_CATEGORIES" :
      return {
        ...state,
        loading: true,
      };


    case "GET_CATEGORIES_SUCCESS" :
      return {
        ...state,
        categories: action.payload.data,
        loading: false,
      };

    case "GET_CATEGORIES_FAIL" : {
      return {
        ...state,
        loading: false,
      };
    }


    default:
      return state;
  }
}
