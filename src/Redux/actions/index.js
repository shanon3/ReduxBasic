import {INCREMENT, DECREMENT, ADD_PLACE, CITY} from './types';

export function increment() {
  return {
    type: INCREMENT,
  };
}
export function decrement() {
  return {
    type: DECREMENT,
  };
}
export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName,
  };
};

export const addCity = cityName => {
  return {
    type: CITY,
    city: cityName,
  };
};
