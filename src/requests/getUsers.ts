import axios, { AxiosError, AxiosResponse } from "axios";

export default function getUsers(page: number, gender: string | null) {
	const { REACT_APP_BASE_URL, REACT_APP_ACCESS_TOKEN } = process.env;

	if (gender) {
		return axios({
			method: "get",
			// eslint-disable-next-line max-len
			url: `${REACT_APP_BASE_URL}/users?page=${page}&gender=${gender}&_format=json&access-token=${REACT_APP_ACCESS_TOKEN}`,
			responseType: "json",
		})
			.then((response: AxiosResponse) => {
				return response;
			})
			.catch((er: AxiosError) => {
				return er?.response?.data;
			});
	} else {
		return axios({
			method: "get",
			url: `${REACT_APP_BASE_URL}/users?page=${page}&_format=json&access-token=${REACT_APP_ACCESS_TOKEN}`,
			responseType: "json",
		})
			.then((response: AxiosResponse) => {
				return response;
			})
			.catch((er: AxiosError) => {
				return er?.response?.data;
			});
	}
}
