import React from "react";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

import { UserType } from "../types/usersTypes";

export default function User({ name, status, gender, email, id }: UserType) {
	return (
		<Row style={userStyle}>
			<Col style={userCellStyle} span={6}>{name}</Col>
			<Col style={userCellStyle} span={6}>{email}</Col>
			<Col style={userCellStyle} span={6}>{gender}</Col>
			<Col style={userCellStyle} span={5}>{status}</Col>
			<Col style={userCellStyle} span={1}>
				<Link to={`/user/${id}`}>
					<Button type={"primary"}>
						Edit
					</Button>
				</Link>
			</Col>
		</Row>
	);
}

const userStyle: React.CSSProperties = {
	height: 45,
	borderBottom: "1px solid",
	borderBottomColor: "#7dbcea",
};

const userCellStyle: React.CSSProperties = {
	display: "flex",
	alignItems: "center"
};
