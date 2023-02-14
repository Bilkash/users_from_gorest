import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";

import Wrapper from "../components/Wrapper";
import { StateType } from "../types/sagaTypes";
import { User } from "../types/usersTypes";

export default function Users() {
	const dispatch = useDispatch();
	const state = useSelector((state: StateType) => state);
	const { users } = state;

	useEffect(() => {
		dispatch({ type: "GET_USERS_DATA" });
	}, []);

	const renderUsers = useCallback(
		() => {
			return users?.data.map((it: User) => {
				return (
					<Row key={it.id}>
						<Col span={6}>{it.name}</Col>
						<Col span={6}>{it.email}</Col>
						<Col span={6}>{it.gender}</Col>
						<Col span={6}>{it.status}</Col>
					</Row>
				);
			});
		},
		[users]
	);

	console.log(users);

	if (!users) {
		return (
			<Wrapper title={"USERS"}>
				<h1>LOADING...</h1>
			</Wrapper>
		);
	} else {
		return (
			<Wrapper title={"USERS"}>
				<Row style={headerStyle}>
					<Col span={6}>Name</Col>
					<Col span={6}>Email</Col>
					<Col span={6}>Gender</Col>
					<Col span={6}>Status</Col>
				</Row>

				{renderUsers()}
			</Wrapper>
		);
	}
}

const headerStyle: React.CSSProperties = {
	borderBottom: "1px solid",
	borderBottomColor: "#7dbcea"
};
