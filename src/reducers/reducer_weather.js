import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  console.log('Action ', state.concat([action.type.data]));
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data])
      return [action.payload.data, ... state];
  }
  return state;
}