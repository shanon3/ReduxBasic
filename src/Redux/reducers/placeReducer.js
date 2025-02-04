import {ADD_PLACE} from '../actions/types';

const initialState = {
  places: [], //tampung nilai berupa array
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        places: state.places.concat({
          key: Math.random(),
          valuePlace: action.payload,
          // kota: action.city,
        }),
      };
    default:
      return state;
  }
}

export default placeReducer;
