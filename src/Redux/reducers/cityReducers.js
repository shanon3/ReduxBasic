import {CITY} from '../actions/types';

const initialState = {
  places: [], //tampung nilai berupa array
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CITY:
      return {
        places: state.places.concat({
          key: Math.random(),
          kota: action.city,
          //nama: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default cityReducer;
