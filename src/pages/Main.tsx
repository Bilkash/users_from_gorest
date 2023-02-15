import React from "react";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";

import Wrapper from "../components/Wrapper";

import "./Main.css";

export default function Main() {
	return (
		<Wrapper title={"APP"}>
			<Space direction={"vertical"}>
				<div>
					<p>In this place you can got user list from <a href={"https://gorest.co.in/"}>gorest</a>.</p>
				</div>

				<Link to={"/users"}>
					<Button type={"link"}>Users</Button>
				</Link>
			</Space>
		</Wrapper>
	);
}
