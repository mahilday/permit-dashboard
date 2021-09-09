import {
    FETCH_PERMIT_FAILURE,
    FETCH_PERMIT_REQUEST,
    FETCH_PERMIT_SUCCESS,
    payload
  } from "../types";

  export const fetchPermitsRequest = ()=> ({
    type: FETCH_PERMIT_REQUEST
  })

  export const fetchPermitsSuccess = (payload: payload)=>({
    type: FETCH_PERMIT_SUCCESS,
    payload

  })

  export const fetchPermitsfailure = (payload: payload)=>({
    type: FETCH_PERMIT_FAILURE,
    payload
  })
