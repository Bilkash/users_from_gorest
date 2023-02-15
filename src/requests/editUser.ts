import { UserEditType } from "../types/usersTypes";
import axios from "axios";

export default function editUser(values: UserEditType, id: string) {
	const { REACT_APP_ACCESS_TOKEN, REACT_APP_BASE_URL } = process.env;
	const userUrl = `${REACT_APP_BASE_URL}/users/${id}`;
	const headers = {
		Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
		"Content-Type": "application/json"
	};

	axios.patch(userUrl, values, { headers })
		.then(response => {
			console.log(`User ${id} updated successfully!`);
		});
}
