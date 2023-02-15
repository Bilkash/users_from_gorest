import { takeEvery, put } from "redux-saga/effects";

import getUsers from "../requests/getUsers";
import getUserForEdit from "../requests/getUserForEdit";

type UserForEditParams = {
	id: string,
	type: string
}

type GetUserDataParams = {
	page: number,
	type: string,
	gender: string | null
}

function* getUsersData({ page, gender }: GetUserDataParams):Generator<any> {
	try {
		const users = yield getUsers(page, gender);
		yield put({ type: "GET_USERS", payload: users });
	} catch (e) {
		yield put({ type: "SET_ERROR_USERS", payload: e });
	}
}

function* getUserForEditData({ id }: UserForEditParams):Generator<any> {
	try {
		const user = yield getUserForEdit(id);
		yield put({ type: "GET_USER_FOR_EDIT", payload: user });
	} catch (e) {
		yield put({ type: "SET_USER_FOR_EDIT_ERROR", payload: e });
	}
}

export function* rootSaga() {
	yield takeEvery("GET_USERS_DATA", getUsersData);
	yield takeEvery("GET_FOR_EDIT_DATA", getUserForEditData);
}
