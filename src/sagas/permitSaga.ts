import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { FETCH_PERMIT_REQUEST, permits } from "../types";
import {
  fetchPermitsfailure,
  fetchPermitsSuccess,
} from "../actions/permitAction";
import { backendLink } from "../utils/bkendLink";

const getPermits = async () => {
  let permit = await axios.get<permits>(`${backendLink}`);
  let newPermit = permit.data.sort((a: any, b: any) => {
    let da: any = new Date(a.issue_date),
      db: any = new Date(b.issue_date);
    return da - db;
  });
  console.log(newPermit);
  const tenMaxPermits = newPermit.slice(-10)
  return tenMaxPermits;
};

function* fetchPermitsSaga(): Generator<any, void, permits> {
  try {
    const res: any = yield call(getPermits);
    yield put(
      fetchPermitsSuccess({
        permits: res,
        error: null,
      })
    );
  } catch (e) {
    yield put(
      fetchPermitsfailure({
        permits: [],
        error: e,
      })
    );
  }
}

function* permitSaga() {
  yield all([takeLatest(FETCH_PERMIT_REQUEST, fetchPermitsSaga)]);
}

export default permitSaga;
