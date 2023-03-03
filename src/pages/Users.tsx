import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Select, Space } from "antd";

import Wrapper from "../components/Wrapper";
import User from "../components/User";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

import { StateType } from "../types/sagaTypes";
import { UserType } from "../types/usersTypes";

export default function Users() {
	const dispatch = useDispatch();
	const state = useSelector((state: StateType) => state);
	const { users, page, gender } = state;

	const handeChangeGenderFilter = (value: string | null) => {
		dispatch({ type: "CHANGE_GENDER_FILTER", payload: value });
	};

	useEffect(() => {
		dispatch({ type: "GET_USERS_DATA", page, gender });

		dispatch({ type: "CLEAR_USER_TO_EDIT" });
		dispatch({ type: "CLEAR_USER_FOR_EDIT_ERROR" });
	}, [dispatch, page]);

	const renderUsers = useCallback(
		() => {
			return users?.data.map((it: UserType) => {
				return <User key={it.id} {...it}/>;
			});
		},
		[users]
	);

	if (!users) {
		return (
			<Loader/>
		);
	} else {
		return (
			<Wrapper title={"USERS"}>
				<Space>
					<div>
						Filter by gender:
					</div>

					<Select
						defaultValue={gender}
						style={{ width: 120 }}
						onChange={handeChangeGenderFilter}
						options={[
							{ value: null, label: "None" },
							{ value: "male", label: "Male" },
							{ value: "female", label: "Female" },
						]}
					/>
				</Space>

				<Row style={headerStyle}>
					<Col span={6}>Name</Col>
					<Col span={6}>Email</Col>
					<Col span={6}>Gender</Col>
					<Col span={5}>Status</Col>
					<Col span={1}>Edit</Col>
				</Row>

				{renderUsers()}

				<Pagination/>
			</Wrapper>
		);
	}
}

const headerStyle: React.CSSProperties = {
	borderBottom: "1px solid",
	borderBottomColor: "#7dbcea",
	fontWeight: "bold"
};
