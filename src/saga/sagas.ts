import { takeEvery, put } from "redux-saga/effects";
import getUsers from "../requests/getUsers";

function* getUserData():Generator<any> {
	try {
		const users = yield getUsers();
		yield put({ type: "GET_USERS", payload: users });
	} catch (e) {
		yield put({ type: "SET_ERROR_USERS", payload: e });
	}
}

export function* rootSaga() {
	yield takeEvery("GET_USERS_DATA", getUserData);
}
