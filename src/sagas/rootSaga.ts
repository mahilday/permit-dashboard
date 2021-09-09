import {all, fork} from  'redux-saga/effects'
import permitSaga from './permitSaga'

export function* rootSaga(){
    yield all([fork(permitSaga)])
}