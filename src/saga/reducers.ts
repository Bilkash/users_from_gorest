import { StateType } from "../types/sagaTypes";

const initialState = {
	users: null,
	error: null
};

type RootAction = {
	type: string,
	payload: any
};

export default function rootReducer(
	state: StateType = initialState,
	action: RootAction
) {
	switch (action.type) {
	case "GET_USERS":
		return { ...state, users: action.payload };
	case "SET_ERROR_USERS":
		return { ...state, error: action.payload };
	default:
		return state;
	}
}
