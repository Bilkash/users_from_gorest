import axios, { AxiosError, AxiosResponse } from "axios";

export default function getUsers() {
	const { REACT_APP_BASE_URL } = process.env;

	return axios({
		method: "get",
		url: `${REACT_APP_BASE_URL}/users`,
		responseType: "json",
	})
		.then((response: AxiosResponse) => {
			console.log(response);

			return response;
		})
		.catch((er: AxiosError) => {
			console.log(er);

			return er?.response?.data;
		});
}
