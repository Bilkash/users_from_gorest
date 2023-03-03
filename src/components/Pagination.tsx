import React from "react";
import { Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { StateType } from "../types/sagaTypes";

export default function Pagination() {
	const dispatch = useDispatch();
	const state = useSelector((state: StateType) => state);
	const { page, users } = state;
	const allPages = +users?.headers["x-pagination-pages"];

	const handleNext = () => {
		if (page !== allPages) {
			dispatch({ type: "ADD_PAGE" });
		}
	};

	const handleBack = () => {
		if (page > 1) {
			dispatch({ type: "SUBTRACT_PAGE" });
		}
	};

	const renderNext = () => {
		return (
			<Button
				type={"link"}
				onClick={handleNext}
			>
				Next
			</Button>
		);

	};

	const renderBack = () => {
		return (
			<Button
				type={"link"}
				onClick={handleBack}
			>
					Back
			</Button>
		);
	};

	if (users) {
		return (
			<Space style={wrapperStyle}>
				{renderBack()}
				<Space>
					{page}
				</Space>
				{renderNext()}
			</Space>
		);
	} else {
		return null;
	}
}

const wrapperStyle: React.CSSProperties = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
};
