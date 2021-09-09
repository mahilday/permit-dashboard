import {
  PermitAction,
  PermitState,
  FETCH_PERMIT_FAILURE,
  FETCH_PERMIT_REQUEST,
  FETCH_PERMIT_SUCCESS,
} from "../types";
const initialState: PermitState = {
  pending: false,
  permits: [],
  error: null,
};

 const  permitsReducer = (state = initialState, action: PermitAction) => {
  switch (action.type) {
    case FETCH_PERMIT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PERMIT_SUCCESS:
      return {
        ...state,
        pending: false,
        permits: action.payload.permits,
        error: null,
      };
    case FETCH_PERMIT_FAILURE:
      return {
        ...state,
        pending: false,
        permits: action.payload.permits,
        error: action.payload.error,
      };
      default:
          return {
              ...state
          }
  }
};

export default permitsReducer;