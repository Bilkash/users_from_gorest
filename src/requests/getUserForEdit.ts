import axios, { AxiosResponse } from "axios";

export default function getUserForEdit(id: string) {
	const { REACT_APP_BASE_URL } = process.env;

	return axios({
		method: "get",
		url: `${REACT_APP_BASE_URL}/users/${id}`,
		responseType: "json",
	})
		.then((response: AxiosResponse) => {
			return response;
		});
}
