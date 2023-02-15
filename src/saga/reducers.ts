import { StateType } from "../types/sagaTypes";

const initialState = {
	users: null,
	error: null,
	userForEdit: null,
	userForEditError: null,
	page: 1,
	gender: null
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
	case "GET_USER_FOR_EDIT":
		return { ...state, userForEdit: action.payload };
	case "CLEAR_USER_TO_EDIT":
		return { ...state, userForEdit: null };
	case "SET_USER_FOR_EDIT_ERROR":
		return { ...state, userForEditError: action.payload };
	case "CLEAR_USER_FOR_EDIT_ERROR": {
		return { ...state, userForEditError: null };
	}
	case "ADD_PAGE":
		return { ...state, page: state.page+1 };
	case "SUBTRACT_PAGE":
		return { ...state, page: state.page-1 };
	case "CHANGE_GENDER_FILTER":
		return { ...state, gender: action.payload };
	default:
		return state;
	}
}
